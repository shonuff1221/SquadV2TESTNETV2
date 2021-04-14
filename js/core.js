const tokenABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"addTokenHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_BNBValue","type":"uint256"}],"name":"buyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyPriceCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_BNBValue","type":"uint256"},{"internalType":"address payable","name":"_refferedBy","type":"address"}],"name":"buyToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"circulatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isTokenHolder","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"removeTokenHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberOfTokens","type":"uint256"}],"name":"sellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellPriceCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberOfTokens","type":"uint256"}],"name":"sellToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenHolders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"stakeHolderBonus","type":"uint256"},{"internalType":"uint256","name":"refferalBonus","type":"uint256"},{"internalType":"address payable","name":"upline","type":"address"}],"stateMutability":"view","type":"function"}]
const mainABI = [{"constant":true,"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROJECT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERCENT_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"},{"name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"name":"percent","type":"uint256"},{"name":"profit","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRefBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"commissionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"name":"time","type":"uint256"},{"name":"percent","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"name":"plan","type":"uint8"},{"name":"percent","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"profit","type":"uint256"},{"name":"start","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startUNIX","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referrer","type":"address"},{"name":"plan","type":"uint8"},{"name":"_numberOfToken","type":"uint256"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"wallet","type":"address"},{"name":"startDate","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"plan","type":"uint8"},{"indexed":false,"name":"percent","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"profit","type":"uint256"},{"indexed":false,"name":"start","type":"uint256"},{"indexed":false,"name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"}]


let network;
let connection;
let accounts;

const thisURL = window.location.origin.toString();

let Accounttype = "0";
const tokenAddress = "0xDEea7B76f540b3A4B581697a9142E4802f8f5FdD";
let tokenContract = undefined

const mainContractAddress = "0x1d22E9559b948c88af74d0687ad07971F3452b54";
let mainContract = undefined

const zeroAddress = '0x70DAcfC172eeC57553de491E92d9806e28ff69F2'
const bscScan = "https://bscscan.com/address/"+mainContractAddress

let plan = {
	time:"time",
	percent:"percent"
}
let deposit = {
	plan: "plan",
	percent: "percent",
	amount: "amount",
	profit: "profit",
	start: "start",
	finish: "finish"
}

let user = {
	ref: undefined,
	deposits: 0,
	checkpoint: 0,
	address: '',
	levels: 0,
	bonus: "bonus",
	tBonus: "totalBonus"
};

let web3
let loginInt

$(document).ready(function() {
	createCookie()
	window.addEventListener('load', async function () {
		await ethereum.request( {method: 'eth_requestAccounts'} )
		ethereum.request({ method: 'eth_accounts' }).then(function (result) {
			
			user.address = result[0]
			console.log("User wallet: " + user.address)
			$('.user-address')[0].innerHTML = 'Your Address: ' + user.address
			$('.user-address')[0].style.display = ''
			//$('.connect-button')[0].innerHTML = 'Connected!'
			web3 = new Web3(window.web3.currentProvider)
			initContract()
			
			loginInt = setInterval(async () => {
				ethereum.request({method: 'eth_requestAccounts'})
				ethereum.request({ method: 'eth_accounts' }).then(function (result) {
					if(user.address != result[0]){
						location.reload()
					}
				})
			}, 2000)
			
		})
		if(user.address == undefined)
			beginLogins()
	})
	$("#mainContractAddress").effect("fade", 2500, function() {
		$("#mainContractAddress").fadeIn();
		$("#mainContractAddress").on('click',function() {
		window.open(bscScan);
		})
	});
})
let attempts = 0
async function beginLogins(){
	await ethereum.request({method: 'eth_requestAccounts'})
	await userLoginAttempt()
	setTimeout(() => {
		if(user.address == undefined && attempts < 3){
			setTimeout(() => {
				if(user.address == undefined && attempts < 3){
					attempts++
					beginLogins()
				}
			}, 300)
		}
	}, 300)
}
async function userLoginAttempt(){
	await ethereum.request({method: 'eth_requestAccounts'})
	ethereum.request({ method: 'eth_accounts' }).then(function (result) {
		user.address = result[0]
		$('.user-address')[0].innerHTML = 'Your Address: ' + user.address
		$('.user-address')[0].style.display = ''
		$('.connect-button')[0].innerHTML = 'Connected!'
		web3 = new Web3(window.web3.currentProvider)
		
		getMm()
		initContract()
		
		loginInt = setInterval(async () => {
			ethereum.request({method: 'eth_requestAccounts'})
			ethereum.request({ method: 'eth_accounts' }).then(function (result) {
				if(user.address != result[0]) 
					location.reload()
		})
}, 2000)
		
	})
}
async function initContract(){
	try{
		await (mainContract = new web3.eth.Contract(mainABI, mainContractAddress))
		await (tokenContract = new web3.eth.Contract(tokenABI, tokenAddress))
		if(mainContract != undefined){
			checkAllowance()
			console.log("Contract "+mainContractAddress+" loaded!")
			if(typeof startUp === 'function') 
				startUp()
			else if(typeof runDash === 'function')
				runDash()
			else
				console.log("wampwampwamp")
		}else{
			console.log('Error initiating contract.')
			setTimeout(() => {
				initContract()
			}, 2000)
		}
	}catch(e){
		console.log(e)
		setTimeout(() => {
			initContract()
		}, 2000)
	}
}
async function checkAllowance(){
	let allowance = await tokenContract.methods.allowance(user.address, mainContractAddress).call()
	if(allowance < 10000000 * 1e18)
		for(let i = 0; i < $('.invest').length; i++){
			if(typeof startUp === 'function'){
				$('.invest')[i].style.display = 'none'
				$('.approve')[i].style.display = ''
			}
			if(typeof runDash === 'function'){
				$('.sell-token-input')[0].style.display = "none"
				$('.sell-button')[i].onclick = 'approve()'
				$('.sell-button-text')[i].style.display = 'One-Time Approve'
			}
		}
	else
		for(let i = 0; i < $('.invest').length; i++){
			if(typeof startUp === 'function'){
				$('.approve')[i].style.display = 'none'
				$('.invest')[i].style.display = ''
			}
			if(typeof runDash === 'function'){
				$('.sell-token-input')[0].style.display = ""
				$('.sell-button')[i].onclick = 'sellToken()'
				$('.sell-button-text')[i].style.display = 'One-Time Approve'
			}
	}
	setTimeout(() => {
		checkAllowance()
	}, 5000)
}
async function approve(){
	await tokenContract.methods.approve(mainContractAddress, toHexString(100000000 * 1e18)).send({
		from: user.address
	}).then(
		checkAllowance()
	)
}

function getMM(){
	if (user.address != undefined) {
		connection="Metamask is unlocked";
		$("#metamaskConnection").text(connection);
		window.web3.eth.getChainId((err, netId) => {
		  //console.log("networkId==>",netId);
		  switch (netId?.toString()) {
			case "1":
			  //console.log("This is mainnet");
			  $("#network").text("This is mainnet");
			  Accounttype = "1";
			  network = "mainnet";
			  break;
			case "2":
			  //console.log("This is the deprecated Morden test network.");
			  $("#network").text(
				"This is the deprecated Morden test network."
			  );
			  break;
			case "3":
			  //console.log("This is the ropsten test network.");
			  $("#network").text("This is the ropsten test network.");
			  network = "ropsten";
			  break;
			case "4":
			  //console.log("This is the Rinkeby test network.");
			  $("#network").text("This is the Rinkeby test network.");
			  network = "Rinkeby";
			  break;
			case "42":
			  //console.log("This is the Kovan test network.");
			  $("#network").text("This is the Kovan test network.");
			  network = "Kovan";
			  break;
			  case "97":
			  //console.log("This is the BNB test network.");
			  $("#network").text("This is the BNB test network.");
			  network = "BNBTestnet";
			  break;
			  case "57":
				//console.log("This is the BNB main network.");
				$("#network").text("This is the BNB main network.");
				network = "BNBMain";
				break;
			default:
			  //console.log("This is an unknown network.");
			  $("#network").text("This is the unknown test network.");
			  }
			});

	}else{
		connection="Metamask is locked";
		$("#metamaskConnection").text(connection);
	}
}

function isLocked() {
  window.web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      //console.log(err);
      $("#lock").text(err);
    } else if (accounts.length === 0) {
      //console.log("MetaMask is locked");
      $("#lock").text("MetaMask is locked.");
    } else {
      //console.log("MetaMask is unlocked");
      $("#lock").text("MetaMask is unlocked.");
    }
  });
}

function getBalanceOfAccount() {
  window.web3.eth.getBalance(user.address, (err, wei) => {
    myBalance = web3.utils.fromWei(wei, 'ether')
    //console.log("Balance===>",myBalance);
    $("#getBalance").text("Account Balance:"+myBalance+" "+"BNB");
})
}

//Utility functions
function toHexString(number){
	return '0x'+number.toString(16)
}

function validateErcAddress(address) {
    if (typeof address !== 'string')
        return false;

    if (address[0] === "0" && address[1] === "x"&& address.length == 42)
        return true;

    return false;
}

function abrNum(_num, fixed) {
    let num = parseFloat(_num)
    if (num === null) {
        return null;
    } // terminate early
    if (num === 0) {
        return '0';
    } // terminate early
    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k > 0 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
        e = d// + ['', 'K', 'M', 'B', 'T'][k]; // append power

    return e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
}

//ACCESS COOKIE
function accessCookie(cookieName) {
    let name = cookieName + "=";
	let accessedCookie
    let allCookieArray = document.cookie.split(';');
    for (let i = 0; i < allCookieArray.length; i++) {
        let temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0){
			accessedCookie = temp.substring(name.length, temp.length)
			if(validateErcAddress(accessedCookie))
				user.ref = accessedCookie
			//console.log("Referrer: " + user.ref)
		}
    }
}
//COOKIE CREATION
function createCookie() {
    if (window.location.href.indexOf("ref=") < 0) {
        user.ref = zeroAddress
    }else{
        const index = window.location.href.indexOf("ref=") + 4
		let ref = window.location.href.slice(index, index + 42)
		if(window.localStorage) {
			localStorage.setItem('referrerAddress', ref);
		}

		let date = new Date();
		date.setTime(date.getTime() + (10000 * 24 * 60 * 60 * 1000))
		document.cookie = "ref=" + ref + "; expires=" + date.toGMTString()
	}
	accessCookie("ref")
}
