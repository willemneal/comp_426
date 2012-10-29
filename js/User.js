/* An object that contains information about a user with an account
 * on our website
 */
 var User = function (first, last, email) {
 	this.first = first;
 	this.last = last;
 	this.email = email;

 	//a list of genres the user has liked
 	var dislikedGenres = new Array();
	var likedGenres = new Array();
	var i = 0;
 }

User.prototype.fullName = function(){
	return this.first + " " + this.last;
}

User.prototype.addGenre = function(genre){
	this.genres.push(genre);
	this.likedGenres[genre.value] = i;
};

/*likeArticle(article)
takes an article adds a like, and adds the articles genre to the user's genre list
*/

User.prototype.likeArticle = function(article){
	article.liked();
	this.likedGenres.push(article.genre);
};
 
 User.prototype.dislikeArticle = function(article){
	article.disliked();
	this.dislikedGenres.push(article.genre);
 }