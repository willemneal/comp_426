/* An object that contains information about a user with an account
 * on our website
 */
 var User = function (first, last, email, password) {
 	this.first = first;
 	this.last = last;
 	this.email = email;
 	this.password = password;

 	//a list of genres the user has liked
 	this.genres = []
 }

User.prototype.changePassword = function(newPassword){
	this.password = newPassword;
}

User.prototype.addGenre = function(genre){
	this.genres.push(genre);
};

/*likeArticle(article)
takes an article adds a like, and adds the articles genre to the user's genre list
*/

User.prototype.likeArticle = function(article){
	article.liked();
	this.genres.push(article.genre);
};
 
 User.prototype.dislikeArticle = function(article){
	article.disliked();
	var arrIndex = array.indexOf(article.genre);
	if(arrIndex>=0){
		this.genres.splice(arrIndex, 1);
	}
 }