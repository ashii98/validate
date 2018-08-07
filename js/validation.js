function validate(config){
	let self = $(config.input);
	let validation = false;
	let self_validation = false;

	if(config.input.charAt(0) != '.'){
		throw('Use Class, nothing else.');
		self_validation = true;
	}

	if(!self_validation){
		for(let i = 0; i < self.length; i++){
			if($(self[i]).val().trim() == ""){
				$(self[i]).addClass(config.border_class);
				validation = true;
				callTimeout(self);
				break;
			}
		}
		return validation;
	}
}

function callTimeout(inp) {
	let self = inp;
	setTimeout(function() {
		$(self).removeClass('red-border');
	}, 3000)
}
