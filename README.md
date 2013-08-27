Elibom Node.js API Client
===========
[![Build Status](https://travis-ci.org/elibom/elibom-node.png)](https://travis-ci.org/elibom/elibom-node)

A Node.js client of the Elibom REST API. [The full API reference is here](http://www.elibom.com/developers/reference).


## Getting Started

1\. Install the module

```bash
npm install elibom
```

2\. Configure the `ElibomClient` object passing your credentials.
```javascript
var elibomClient = require('elibom')

client = new ElibomClient({user:'user@domain.com',password:'apiPassword'});

```
*Note*: You can find your api password at http://www.elibom.com/api-password (make sure you are logged in).

You are now ready to start calling the API methods!

## API methods

* [Send SMS](#send-sms)
* [Schedule SMS](#schedule-sms)
* [Show Delivery](#show-delivery)
* [List Scheduled SMS Messages](#list-scheduled-sms-messages)
* [Show Scheduled SMS Message](#show-scheduled-sms-message)
* [Cancel Scheduled SMS Message](#cancel-scheduled-sms-message)
* [List Users](#list-users)
* [Show User](#show-user)
* [Show Account](#show-account)

### Send SMS
```javascript
client.sendMessage('300XXXXXXXXX','message',function(err,data){	
	if (!err){
		console.log(data);
	}else{
		console.log(err.message);
	}
});
```

### Schedule SMS 
```javascript
client.sendMessage('300XXXXXXXXX','message',function(err,data){	
	if (!err){
		console.log(data);
	}else{
		console.log(err.message);
	}
});
```

### Show Delivery
```javascript
client.sendMessage('300XXXXXXXXX','message',function(err,data){	
	if (!err){
		console.log(data);
	}else{
		console.log(err.message);
	}
});
```

### List Scheduled SMS Messages
```javascript
client.sendMessage('300XXXXXXXXX','message',function(err,data){	
	if (!err){
		console.log(data);
	}else{
		console.log(err.message);
	}
});
```

### Cancel Scheduled SMS Message
```javascript
client.sendMessage('300XXXXXXXXX','message',function(err,data){	
	if (!err){
		console.log(data);
	}else{
		console.log(err.message);
	}
});
```

### List Users
```javascript
client.sendMessage('300XXXXXXXXX','message',function(err,data){	
	if (!err){
		console.log(data);
	}else{
		console.log(err.message);
	}
});
```
### Show User
```python
user = elibom.show_user(usersId)
```

### Show Account
```python
account = elibom.show_account()
```
