/* News Article
 * 
 * Contains info about each article
 * including: date, genre, title, 
 * author, location, source url.
 * 
 * example: var = new Article('URL',',"UNC Wins', date,
  'author', 'sports', 'Chapel Hill, NC')
 * 
 */
 var Article = function (source,title, date, 
 						author, genre, location) {
 	this.source = source;
 	this.title = title;
 	this.date = date;
 	this.author = author;
 	this.genre = genre;
 	this.location = location;
 }
 Article.DAYINMS = 86400000;
 Article.prototype.isOld = function() {//returns whether article is old.
 	return this.date + 3 * this.DAYINMS < this.date.getTime();
 }
