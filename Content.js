/* Content
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
 						author, genre, location,preview) {
 	this.source = source;
 	this.title = title;
 	this.date = date;
 	this.author = author;
 	this.genre = genre;
 	this.location = location;
 	this.preview = preview;
 }
 Article.DAYINMS = 86400000;
 Article.prototype.isOldThan = function(day) {//returns whether article is old.
 	return this.date + day * this.DAYINMS < this.date.getTime();
 }


Article.all = [];
Article.push(new Article('http://www.theonion.com/articles/
	obama-excited-to-participate-in-first-debate,29930/?ref=auto',"Obama Excited To Participate In First Debate",
	new date(10,15,2012),"n/a","politics","Washington","Saying he was excited to “finally get out there” and defend his policies in front of the entire nation, President Barack Obama told reporters he was energized and eager to participate in his first debate of the 2012 election cycle Tuesday night."));
Article.push(new Article("http://www.theonion.com/articles/polls-reveal-essentially-nothing,29927/?ref=auto",
	"Polls Reveal, Essentially, Nothing",new date(10,15,2012),"n/a",
	"A slew of recently released polls from the nation’s top public opinion
	 firms have revealed, well, essentially nothing about the 2012 presidential
	  race, sources confirmed Monday. Conducted by Ipsos, Gallup, Public Policy Polling,
	   and Rasmussen, the pretty much meaningless polls reportedly offered no deep insight
	    into any key demographic in the United States and, when it comes down to it, were all 
	    basically pointless and a waste of everyone’s time.");
Article.push(new Article(
Article.push(new Article(
Article.push(new Article(
Article.push(new Article(
Article.push(new Article(
Article.push(new Article(
Article.push(new Article(