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
 						author, genre, id) {
 	this.source = source;
 	this.title = title;
 	this.date = date;
 	this.author = author;
 	this.genre = genre;
 	this.id = id;

 	this.likes = 0;
 }
 Article.DAYINMS = 86400000;

 Article.prototype.liked = function(){
	this.likes++;
 };
 
 Article.prototype.disliked = function(){
	this.likes--;
 }


 Article.prototype.isOldThan = function(day) {//returns whether article is old.
 	return this.date + day * this.DAYINMS < this.date.getTime();
 };


