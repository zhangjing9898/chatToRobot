mui.ajax('https://webchat.botframework.com/v3/directline/conversations/Bh4myB9CyHZF634WtsuaPh/activities', {
	data: {
		"type": "message",
		"from": {
			"id": "14pdNFiHk8S",
			"name": "You"
		},
		"text": "安静"
	},
	dataType:'json',
	type:'post',
	timeout:10000,
	headers:{
		'Authorization':'Bearer JLyE93qL-5Y.cwA.TXg.dm3GFznmHXfMRq7CNqdz7Adf1TJ60QpTBtmK6KVY1vY',
		'Content-Type':'application/json'
	},
	success:function(data){
		console.log(data)
	}
})

//转
mui.ajax('https://webchat.botframework.com/v3/directline/conversations/Bh4myB9CyHZF634WtsuaPh/activities, {
	data: {
		"watermark": "message",
	},
	dataType:'json',
	type:'get',
	timeout:10000,
	headers:{
		'Authorization':'Bearer JLyE93qL-5Y.cwA.TXg.dm3GFznmHXfMRq7CNqdz7Adf1TJ60QpTBtmK6KVY1vY',
		'Content-Type':'application/json'
	},
	success:function(data){
		console.log(data)
	},
	error:function(xhr,type,errorThrown){
		console.log(type);
	}
})