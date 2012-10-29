$(document).ready(function () {
	alert('Init function');
	
	build_user_dropdown();
	load_first_articles();
	});
	function usersFunction(){
		alert("that");
		var user = $(this).find("select[name='user']").find(":selected").data('user');
		load_articles(user);
	}

	var num_articles = 0;
	var load_first_articles = function(){
	 random_article1 = Article.all[Math.floor(Math.random()*Article.all.length)];
	$('#sub_content').append("<h1>"+random_article1.title+"</h1>" + random_article1.author+"<div id='button-wrapper1'><form><button type = 'submit' onclick = 'clickFunction(random_article1.id); return false;'>like</button></form></div>");
	 random_article2 = Article.all[Math.floor(Math.random()*Article.all.length)];
	$('#sub_content').append("<h1>"+random_article2.title+"</h1>" + random_article2.author+"<div id='button-wrapper2'><form><button type = 'submit' onclick = 'clickFunction(random_article2.id); return false;'>like</button></form></div>");
	 random_article3 = Article.all[Math.floor(Math.random()*Article.all.length)];
	$('#sub_content').append("<h1>"+random_article3.title+"</h1>" + random_article3.author+"<div id='button-wrapper3'><form><button type = 'submit' onclick = 'clickFunction(random_article3.id); return false;'>like</button></form></div>");
	 random_article4 = Article.all[Math.floor(Math.random()*Article.all.length)];
	$('#sub_content').append("<h1>"+random_article4.title+"</h1>" + random_article4.author+"<div id='button-wrapper4'><form><button type = 'submit' onclick = 'clickFunction(random_article4.id); return false;'>like</button></form></div>");
	/*
		while(num_articles<4){
			random_article = Article.all[Math.floor(Math.random()*Article.all.length)];
			$('#sub_content').append("<h1>" + random_article.title+ "</h1>" + random_article.author + "<div id='button-wrapper'><form><button type = 'submit' onclick = 'clickFunction(random_article.id); return false;'>like</button></form></div>");
			num_articles++;
		}*/
	};

	function clickFunction(idRef){
		alert(idRef);
		for(i = 0; i<Article.all.length; i++){
			if(Article.all[i].id==idRef){
				Article.all[i].likes++;
				alert(Article.all[i].likes);
			}
		}
	}

	var load_articles = function(){

	/*var likedArticles = new Array();
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
	}*/


	
	}
	var build_user_dropdown = function(){
		var user_dropdown = $("#users > form > select[name='user']");
		
		for (var i = 0; i<User.all.length; i++){
			var next_user = User.all[i];
			var user_option = $("<option></option>");
			user_option.append(next_user.fullName());
			user_dropdown.append(user_option);
			
			user_option.data('user', next_user);
		}
	};