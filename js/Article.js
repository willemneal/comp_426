/* News Article
 * 
 * Contains info about each article
 * including: date, genre, title, 
 * author, location, source url.
 * 
 * example: var = new Article('URL',',"UNC Wins', date,
  'author', 'sports', 'Chapel Hill, NC')
 * 

 Consider views and shares
 */
 var Article = function (source, title, date, 
 						author, genre, location) {
 	this.source = source;
 	this.title = title;
 	this.date = date;
 	this.author = author;
 	this.genre = genre;
 	this.location = location;

 	this.likes = 0;
 }
 Article.DAYINMS = 86400000;

/*if a user in some way likes an article either by clicking a button or 
just viewing the article then this is meant to make note of the article to the
user's preferences*/
 Article.prototype.liked = function(){
	this.likes++;
/*Could make a like function from here such that when attach to user is called it 
actually increments a like function*/
 };
 
 Article.prototype.disliked = function(){
	this.likes--;
 }


 Article.prototype.isOldThan = function(day) {//returns whether article is old.
 	return this.date + day * this.DAYINMS < this.date.getTime();
 };


