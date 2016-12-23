console.log("jashith java script loaded");

function isDefined(a)
{
    return (typeof(a)=="undefined" ? false : true);
}
try{
	var JCL_timer = (function(){
		this.serachVelocity = 300;
		this.searchTrigger = '';
		this.searchQuery = '';
		this.callBack = function(obj){}
		this.setDelayTime = function(velocity){
			this.serachVelocity = velocity;
		}
		this.setCallBack = function(callback){
			this.callback = callback;
		}
		this.fireCallBack = function(){
			this.callback(this.searchQuery);
		}
		this.update = function(obj){
			this.searchQuery = obj;
			var th = this;
			if(this.searchTrigger!=''){
				clearTimeout(this.searchTrigger);
				this.searchTrigger = '';
			}

			var velocity = obj.attr('data-delay');
			//set custom velocity if avail
			if(isDefined(velocity) && !isNaN(velocity))
				this.setDelayTime(velocity);

			th.searchTrigger = setTimeout(function(){
				th.searchTrigger = '';
				th.fireCallBack();
			}, th.serachVelocity);
		}
		
	});
}catch(e) {console.log(e);}

var JCL_lib = function(){
	
	this.validateEmail = function(emailField){
		var reg = /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (reg.test(emailField.value) == false) 
		    return false;
		return true;
	}
		

}
