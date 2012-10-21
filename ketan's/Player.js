/* Player
 *
 * Models individual NFL players
 *
 * Biographical details (height, weight, age, college, etc.) are given as
 * hash object bio. This allows different players to have different kinds
 * of information and for some players to not have any at all. 
 * Stats should be an array of StatLine objects. First one in array should
 * always be 2012 projection with subsequent stat lines for prior years.
 *
 */

 var Player = function (first, last, position, team, bio, stats) {
 	this.first = first;
 	this.last = last;
 	this.position = position;
 	this.team = Team.all[team];
 	this.bio = bio;
 	this.stats = stats;

 	this.available = true;
 	this.price = null;
 	this.owner = null;
 }

 Player.prototype.attachToOwner = function(owner, price) {
 	this.available = false;
 	this.price = price;
 	this.owner = owner;

 	build_player_dropdown();
 };

 Player.prototype.getBioDetailString = function() {
 	if (!bio) return "";

 	var result = "";

 	// Put Height, Weight, Age, and College first in that 
 	// order if available.

 	if (bio['Height']) {
 		result += "Height: " + bio['Height'] + " ";
 	}
 	if (bio['Weight']) {
 		result += "Weight: " + bio['Weight'] + " ";
 	}
 	if (bio['Age']) {
 		result += "Age: " + bio['Age'] + " ";
 	}
 	if (bio['College']) {
 		result += "College: " + bio['College'] + " ";
 	}

 	for (var key in bio) {
 		switch (key) {
 			case 'Height':
 			case 'Weight':
 			case 'Age':
 			case 'College':
 				break;
 			default:
 				result += key + ": " + bio[key] + " ";
 		}
 	}

 	return result;

 };

 Player.prototype.getListingString = function() {
 	return this.first + " " + this.last + " (" + this.position + " - " + this.team.city + ")";
 };

