$(document).ready(function () {
	alert('Init function');
	
	build_user_dropdown();
	
	});
	
	var num_articles = 0;
	var load_articles = function(User){
	var likedArticles = new Array();
	var remainingArticles = new Array();
	for(var i=0; i<Article.all.length; i++){
		remainingArticles[i] = Article.all[i];
	}
	var dislikedArticles = new Array();
	for(var i=0; i<User.likedGenres; i++){
		for(var k = 0; k<Article.all.length; k++){
			if(Article.all[k].genre == User.likedGenres[i]){
				likedArticles.push(Article.all[k]);
				var arrIndex = array.indexOf(article.all[k]);
				if(arrIndex>=0){
					remainingArticles.splice(arrIndex, 1);
				}
			}
		}
	}
	for(var i = 0; i<User.dislikedGenres.length; i++){
		for(var k = 0; k<Article.all.length; k++){
			if(Article.all[k].genre == User.dislikedGenres[i]){
				dislikedArticles.push(Article.all[k]);
				var arrIndex = array.indexOf(article.all[k]);
				if(arrIndex>=0){
					remainingArticles.splice(arrIndex, 1);
				}
			}
		}
	}


	while(num_articles<4){
		while(num_articles<likedArticles.length){
			$('#sub_content').append(likedArticles[num_articles].title);
			num_articles++;
		}
		while(num_articles<remainingArticles.length){
			$('#sub_content').append(remainingArticles[num_articles].title);
		}
		while(num_articles<dislikedArticles.length){
			$('#sub_content').append(dislikedArticles[num_articles].title);	
		}
	}
	}
	var build_user_dropdown = function(){
		var user_dropdown = $("form > select[name='user']");
		
		for (var i = 0; i<User.all.length; i++){
			var next_user = User.all[i];
			var user_option = $("<option></option>");
			user_option.append(next_user.fullName());
			user_dropdown.append(user_option);
			
			user_option.data('user', next_user);
		}
	};