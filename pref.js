/* Pref
 * 
 * Contains preferences for each user.
 * 
 * 
 * 
 * 
 */
 var Pref = function (genres[],location,password) {
 	this.location = location;
 	this.genres[]= genres;
 	this.password = password;
 	
 }
 Article.prototype.changePassword = function(newPassword) {
 	this.password = newPassword;
 };
 Pref.prototype.addGenre = function(newGenre){
 	this.genres.push(newGenre);
 };
 
