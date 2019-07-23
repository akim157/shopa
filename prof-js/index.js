const apiCall = new Promise(function(resolve, reject) {
    $.ajax({
        url: 'http://ip.jsontest.com/',
        type: 'GET',
        crossDomain: true,
        success: function(data){
            resolve(data.ip);
        },
        error: function(){
            reject();
        }
    });
});

apiCall.then(function(ip){
	console.log('ip: ', ip);
}).catch(function(){
	console.log('error');
});

///////////////
const delay = (ms = 1000) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), ms);
	});
};

delay(3000).then(()=>{

});