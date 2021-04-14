function runDash(){
	getTokenCounts()
	getRefCount()
}

async function getTokenCounts(){
	totalTokens = await tokenContract.methods.totalSupply().call() / 1e18
	$('.total-tokens')[0].innerHTML = abrNum(totalTokens, 2)
	
	circulatingTokens = await tokenContract.methods.circulatingSupply().call() / 1e18
	
	tokenBuyPrice = await tokenContract.methods.buyPrice(toHexString(1e18)).call()
	tokenSellPrice = await tokenContract.methods.sellPrice(toHexString(tokenBuyPrice)).call()
	
	$('.token-buy-price')[0].innerHTML = "1 BNB : " + abrNum(tokenBuyPrice/1e18, 4) +" SqdUp Tokens"
	if(circulatingTokens > 0)
		$('.token-sell-price')[0].innerHTML = abrNum(tokenSellPrice/1e18, 4) +" SqdUp Tokens : 1 BNB"
	else
		$('.token-sell-price')[0].innerHTML = ''
	
	userTokens = await tokenContract.methods.balanceOf(user.address).call() / 1e18
	$('.user-tokens')[0].innerHTML = abrNum(userTokens,2)
	
}
async function buyToken(){
	console.log("refferal",user.ref);
	let ref
	if(validateErcAddress(user.ref))
		ref = user.ref
	else if(user.ref == user.address)
		ref = zeroAdddress
	else 
		ref = zeroAddress
	
	let amount = toHexString( $('.buy-token-input')[0].value * 1e18 )
	await tokenContract.methods.buyToken(amount,ref).send({
		from: user.address,
		value: amount,
		gasLimit:210000
	})
}
async function getBuyOutput(){
	let amount = $('.buy-token-input')[0].value
	let tokens = abrNum(await tokenContract.methods.buyPrice(toHexString(amount* 1e18)).call() / 1e18, 2)
	$('.buy-button-text')[0].innerHTML = 'Buy ' + tokens + ' Tokens<br> for '+ amount +' BNB'
}
async function getSellOutput(){
	let amount = $('.sell-token-input')[0].value
	let bnb = abrNum(await tokenContract.methods.sellPrice(toHexString(amount* 1e18)).call() / 1e18, 2)
	$('.sell-button-text')[0].innerHTML = 'Sell ' + amount + ' Tokens<br> for '+ bnb +' BNB'
}
async function sellToken(){
	let amount = toHexString( $('.sell-token-input')[0].value * 1e18 )
	await tokenContract.methods.sellToken(amount).send({
		from: user.address,
		gasLimit:210000

	})
}
async function getRefCount(){
	let refCount = await mainContract.methods.getUserDownlineCount(user.address).call()
	$('.ref-count')[0].innerHTML = "Level 1: " + refCount[0]
	$('.ref-count')[1].innerHTML = "Level 2: " + refCount[1]
	$('.ref-count')[2].innerHTML = "Level 3: " + refCount[2]
}