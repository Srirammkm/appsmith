export default {
	validate_login () {
		var db_passwd = validateuser.data;
		console.log(db_passwd)
		if (db_passwd["values"][0] == passwd.inputText){
			return true
		}else{
			return false
		}
	}
}
	
	