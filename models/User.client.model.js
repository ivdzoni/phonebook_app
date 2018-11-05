makeUserList = (function () {

	function User(param1,param2,param3){
		
		this.first_name = param1, 
		this.last_name = param2, 
		this.telephone_number = param3; 
	}
	
	 function makeNewUser(new_user){
		
		param1 = new_user.first_name,
		param2 = new_user.last_name,
		param3 = new_user.telephone_number;
	
		var user = new User(param1,param2,param3);	
		
		return user;
	};

	return {
		makeNewUser: makeNewUser
	};
}());


