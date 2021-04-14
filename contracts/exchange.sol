pragma solidity ^0.6.0;
import "./Squad.sol";
contract Owned {
    modifier onlyOwner() {
        require(msg.sender==owner,"you are not a owner");
        _;
    }
    
    address payable public owner;
    function changeOwner(address payable _newOwner) public onlyOwner {
        require(_newOwner!=address(0));
        owner = _newOwner;
    }
    
}
contract SquadUpExchange is squadUpv2,Owned{
     constructor()public{
     startTime=now;
     owner=msg.sender;
     addTokenHolder(owner);
    }
    /**
    * @notice A method to check if an address is a stakeholder.
    * @param _address The address to verify.
    * @return bool, uint256 Whether the address is a stakeholder,
    * and if so its position in the tokenHolders array.
    */
   function isTokenHolder(address _address)
       public
       view
       returns(bool, uint256)
   {
       for (uint256 s = 0; s < tokenHolders.length; s += 1){
           if (_address == tokenHolders[s]) return (true, s);
       }
       return (false, 0);
   }

   /**
    * @notice A method to add a stakeholder.
    * @param _stakeholder The stakeholder to add.
    */
   function addTokenHolder(address _stakeholder)
       public
   {
       (bool _isStakeholder, ) = isTokenHolder(_stakeholder);
       if(!_isStakeholder) tokenHolders.push(_stakeholder);
   }

   /**
    * @notice A method to remove a stakeholder.
    * @param _stakeholder The stakeholder to remove.
    */
   function removeTokenHolder(address _stakeholder)
       public
   {
       (bool _isStakeholder, uint256 s) = isTokenHolder(_stakeholder);
       if(_isStakeholder){
           tokenHolders[s] = tokenHolders[tokenHolders.length - 1];
           tokenHolders.pop();
       }
   }
    using SafeMath for uint256;
    struct Users{
        uint256 stakeHolderBonus;
        uint256 refferalBonus;
        address payable upline;
    }
    mapping(address=>Users)public users;
    uint256 public startTime;
    address[] public tokenHolders;
    uint256 public totalTokenMinted;
    uint256 public totalTokenSold;
    using SafeMath for uint256;
    uint256 initialPrice=0.005 ether;
    function buyPriceCalculation() public view returns(uint){
        require(startTime != 0,"contract isn't deployed yet!");
        uint256 increment= ((now - startTime)/(10 hours))*10e13;
        return increment;
    }
    function buyPrice(uint256 _BNBValue)public view returns(uint256){
       _BNBValue=_BNBValue-((_BNBValue.mul(10)).div(100));
       uint256 price= (buyPriceCalculation()+initialPrice);
       return (_BNBValue.div(price)).mul(1e18);
    }
    function setReferral(address payable _upline,address _add)internal{
        
        require(_upline==owner||0!=balanceOf(_upline) && _upline!=address(0),"Upline doesn't exist!");
        users[_add].upline=_upline;
    }
    function buyToken(uint256 _BNBValue,address payable _refferedBy)public payable returns(bool){
     require(msg.value==_BNBValue,"Invalid price");
     require(buyPrice(_BNBValue)>0,"Invalid amount of token selected");
     _mint(msg.sender,buyPrice(_BNBValue));
     totalTokenMinted+=buyPrice(_BNBValue);
     setReferral(_refferedBy,msg.sender);
     _refferedBy.transfer(SafeMath.mul(_BNBValue,2).div(100));
     uint256 TotalstakeholderBonus=SafeMath.mul(_BNBValue,8).div(100);
     owner.transfer(TotalstakeholderBonus);
     addTokenHolder(msg.sender);
    }
    function marketCap()public view returns(uint256){
        return address(this).balance;
    }
    function circulatingSupply()public view returns(uint256){
        return SafeMath.sub(totalTokenMinted,totalTokenSold);
    }
    function sellPriceCalculation()public view returns(uint256){
        require(circulatingSupply()>0,"No token bought yet");
        uint256 marketCapValue=SafeMath.mul(marketCap(),10e18);
        uint256 price= SafeMath.div(marketCapValue,circulatingSupply());
        return price;
    }
    function sellPrice(uint256 _numberOfTokens)public view returns(uint256){
        uint256 price=SafeMath.mul(_numberOfTokens,sellPriceCalculation());
        return SafeMath.div(price,10e18);
    }
    function sellToken(uint256 _numberOfTokens)public returns(bool){
        require(balanceOf(msg.sender)>=_numberOfTokens,"you dont have enough tokens!");
        uint256 price=sellPrice(_numberOfTokens);
        require(price>0,"Price is not set!");
        require(address(this).balance>=price,"Contract hasn't balance yet!");
        _burn(msg.sender,_numberOfTokens);
        totalTokenSold+=_numberOfTokens;
        uint256 refferalBonus=SafeMath.mul(price,2).div(100);
        uint256 TotalstakeholderBonus=SafeMath.mul(price,8).div(100);
        uint256 sellReturn=price.sub(refferalBonus.add(TotalstakeholderBonus));
         users[msg.sender].upline.transfer(refferalBonus);
         owner.transfer(TotalstakeholderBonus);
         msg.sender.transfer(sellReturn);
        if(balanceOf(msg.sender)==0){
         removeTokenHolder(msg.sender);
        }
    }
}
  