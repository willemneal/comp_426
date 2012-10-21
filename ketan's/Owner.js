/* Owner
 * 
 * Models owners in the league. Provides properties for biographical information and
 * methods for querying roster and budget information.
 */

 var Owner = function (first, last, nickname) {
 	this.first = first;
 	this.last = last;
 	this.nickname = nickname;

 	// Roster is an array of previously purchased players
 	this.roster = [];
 }

Owner.INIT_BUDGET = 100;
Owner.MIN_ROSTER_SIZE = 13;
Owner.MAX_ROSTER_SIZE = 14;

/* shortName()
 *
 * Returns a string (either nickname or first name)
 * suitable for when a short owner name is needed.
 */

 Owner.prototype.shortName = function () {
 	if (this.nickname) {
 		return this.nickname;
 	}
 	return this.first;
 }

/* spent()
 *
 * Amount this owner has already spent.
 */

Owner.prototype.spent = function() {
	var spent = 0;
	$(this.roster).each(function(i,e) {spent += e.price});
	return spent;
};

/* maxBid()
 * 
 * Calculates the max price the owner can buy a player for
 * and still be both under budget and have at least $1 available
 * to fill out a minimum roster.
 */

Owner.prototype.maxBid = function() {
	var num_to_fill_roster = Owner.MIN_ROSTER_SIZE - this.roster.length - 1;
	num_to_fill_roster = num_to_fill_roster < 0 ? 0 : num_to_fill_roster;

	return Owner.INIT_BUDGET - this.spent() - num_to_fill_roster;
}

/* positionPercentage(position)
 *
 * Percentage of total budget spent on a position.
 */

 Owner.prototype.positionPercentage = function(position) {
 	var position_sum = 0;
 	$(this.roster).each(
 		function (i, e) {
 			if (e.position == position) {
 				position_sum += e.price;
 			}
 		});
 	return (position_sum / Owner.INIT_BUDGET) * 100.0;
 };

/* buyPlayer(player, price)
 *
 * Attempts to buy player and add them to this owner's roster.
 * Checks to make sure player is not already claimed and that budget space
 * is available. If purchase is possible, logs transaction with TransactionLog,
 * adds player to roster, and returns true. Returns false if purchase is not
 * possible.
 */

 Owner.prototype.buyPlayer = function(player, price) {
 	if (!player.available) {
 		return false;
 	}

 	if (this.maxBid() < price) {
 		return false;
 	}

 	player.attachToOwner(this, price);
 	this.roster.push(player);
 	TransactionLog.log(this, player);
 	return true;
 };

 