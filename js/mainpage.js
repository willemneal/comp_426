$(document).ready(function () {
	alert('Init function');
	
	build_user_dropdown();
	
	});
	/*var load_articles = function(User){
	var num_articles = 0;
	while(num_articles<4){
		int k = 0;
		for(i = 0; i<User.likedGenres.length, i++)
		{
		if(k<User.likedGenres[i])
			k = User.likedGenres[i];
		
		}
	}
	}*/
	var build_user_dropdown = function(){
		var user_dropdown = $("#head > form > select[name='user']");
		
		for (var i = 0; i<User.all.length; i++){
			var next_user = Owner.all[i];
			var user_option = $("<option></option>");
			user_option.append(next_user.first);
			user_dropdown.append(user_option);
			
			user_option.data('user', next_user);
		}
	};
	
