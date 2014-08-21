var https = require('https')

var ElibomClient = function(options){
	this.host = 'www.elibom.com';
	this.user = options.user;
	this.password = options.password;

	doRequest = function(options,payload,callback){
		var err;	

		var req = https.request(options, function(res) {
			var data = '';
			res.on('data', function (chunk) {
				data += chunk;
			});
			res.on('end', function () {
				if (res.statusCode === 200){
					if (data){
						callback(null,data);	
					}else{
						callback(null,'OK');	
					}
				}else if(res.statusCode === 400){
					callback({message:'Bad request: ' + data},null);
				}else if(res.statusCode === 401){
					callback({message:'Unauthorized, check your credentials'},null);
				}else if(res.statusCode === 404){
					callback({message:'Resource not found'},null);	
				}else if(res.statusCode >= 500){
					callback({message:'Server error, try later'},null);	
				}else {
					callback({message:'Unknow error'},null);	
				}
			});
		});

		req.on('error', function(e) {
			err = e;
		});

		if (payload !== null){
			req.write(payload);	
		}
		req.end();
	};
};

ElibomClient.prototype.sendMessage = function(destination,text,callback){
	var options = {
		host : this.host,
		headers:  {
			'X-API-Source': 'node-0.1.3'
		},
		auth : this.user + ':' + this.password,
		path : '/messages',
		method : 'POST'
	};

	doRequest(options,JSON.stringify({'destination':destination,'text':text}),function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.scheduleMessage = function(destination,text,scheduleDate,callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/messages',
		method : 'POST'
	};

	doRequest(options,JSON.stringify({'destination':destination,'text':text,'scheduleDate':scheduleDate}),function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.showDelivery = function(deliveryToken,callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/messages/'+deliveryToken,
		method : 'GET'
	};
	doRequest(options,null,function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.showSchedule = function(schueduleId,callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/schedules/'+schueduleId,
		method : 'GET'
	};
	doRequest(options,null,function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.cancelSchedule = function(schueduleId,callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/schedules/'+schueduleId,
		method : 'DELETE'
	};
	doRequest(options,null,function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.listSchedules = function(callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/schedules/scheduled',
		method : 'GET'
	};
	doRequest(options,null,function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.showAccount = function(callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/account',
		method : 'GET'
	};
	doRequest(options,null,function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.showUser = function(userId,callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/users/'+userId,
		method : 'GET'
	};
	doRequest(options,null,function(err,data){
		callback(err,data);	
	});
};

ElibomClient.prototype.showUsers = function(callback){
	var options = {
		host : this.host,
		auth : this.user + ':' + this.password,
		path : '/users',
		method : 'GET'
	};
	doRequest(options,null,function(err,data){
		callback(err,data);	
	});
};

module.exports = function(user,password){
	if (!user || !password){
		throw('Invalid arguments you must provide credentials');
	}else{
		return new ElibomClient({user:user,password:password});
	}
};