/* StatLine
 *
 * Models a line of statistics for one year (or current year projection) for a player.
 */

 var StatLine = function (season, team, gp, 
 	                      pass_comp, pass_att, pass_yds, pass_tds, ints,
 	                      rush_att, rush_yds, rush_tds, fumbles,
 	                      rec_att, rec_yds, rec_tds) {
 	this.season = season;
 	this.team = team;
 	this.gp = gp;
 	this.pass_comp = pass_comp;
 	this.pass_att = pass_att;
 	this.pass_yds = pass_yds;
 	this.pass_tds = pass_tds;
 	this.ints = ints;
 	this.rush_att = rush_att;
 	this.rush_yds = rush_yds;
 	this.rush_tds = rush_tds;
 	this.rec_att = rec_att;
 	this.rec_yds = rec_yds;
 	this.rec_tds = rec_tds;
 	this.fumbles = fumbles;
}

StatLine.prototype.ffPts = function() {
	return ((pass_yds / 25.0) + (4 * pass_tds) - (ints * 2) + 
			(rush_yds / 10.0) + (rush_tds * 6) - (fumbles * 2) + 
			(rec_yds / 10) + (rec_tds * 6));
};

StatLine.prototype.ffPtsPerGame = function() {
	return this.ffPts() / gp;
};

StatLine.prototype.isProjection = function() {
	return (this.season == 2012);
};

