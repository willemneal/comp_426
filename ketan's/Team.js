/* Team
 *
 * Models information associated with each NFL team.
 */

 var Team = function(city, name, abbrev, bye) {
 	this.city = city;
 	this.name = name;
 	this.abbrev = abbrev;
 	this.bye = bye;
 }

Team.all = {};
Team.all['IND'] = new Team('Indianapolis', 'Colts', 'IND', 4);
Team.all['PIT'] = new Team('Pittsburgh', 'Steelers', 'PIT', 4);
Team.all['DAL'] = new Team('Dallas', 'Cowboys', 'DAL', 5);
Team.all['DET'] = new Team('Detroit', 'Lions', 'DET', 5);
Team.all['OAK'] = new Team('Oakland', 'Raiders', 'OAK', 5);
Team.all['TB'] = new Team('Tampa Bay', 'Buccaneers', 'TB', 5);
Team.all['CAR'] = new Team('Carolina', 'Panthers', 'CAR', 6);
Team.all['CHI'] = new Team('Chicago', 'Bears', 'CHI', 6);
Team.all['JAC'] = new Team('Jacksonville', 'Jaguars', 'JAC', 6);
Team.all['NO'] = new Team('New Orleans', 'Saints', 'NO', 6);
Team.all['ATL'] = new Team('Atlanta', 'Falcons', 'ATL', 7);
Team.all['DEN'] = new Team('Denver', 'Broncos', 'DEN', 7);
Team.all['KC'] = new Team('Kansas City', 'Chiefs', 'KC', 7);
Team.all['MIA'] = new Team('Miami', 'Dolphins', 'MIA', 7);
Team.all['PHI'] = new Team('Philadelphia', 'Eagles', 'PHI', 7);
Team.all['SD'] = new Team('San Diego', 'Chargers', 'SD', 7);
Team.all['BAL'] = new Team('Baltimore', 'Ravens', 'BAL', 8);
Team.all['BUF'] = new Team('Buffalo', 'Bills', 'BUF', 8);
Team.all['CIN'] = new Team('Cincinnati', 'Bengals', 'CIN', 8);
Team.all['HOU'] = new Team('Houston', 'Texans', 'HOU', 8);
Team.all['NE'] = new Team('New England', 'Patriots', 'NE', 9);
Team.all['NYJ'] = new Team('New York', 'Jets', 'NYJ', 9);
Team.all['SF'] = new Team('San Francisco', '49ers', 'SF', 9);
Team.all['STL'] = new Team('St. Louis', 'Rams', 'STL', 9);
Team.all['ARI'] = new Team('Arizona', 'Cardinals', 'ARI', 10);
Team.all['CLE'] = new Team('Cleveland', 'Browns', 'CLE', 10);
Team.all['GB'] = new Team('Green Bay', 'Packers', 'GB', 10);
Team.all['WAS'] = new Team('Washington', 'Redskins', 'WAS', 10);
Team.all['MIN'] = new Team('Minnesota', 'Vikings', 'MIN', 11);
Team.all['NYG'] = new Team('New York', 'Giants', 'NYG', 11);
Team.all['SEA'] = new Team('Seattle', 'Seahawks', 'SEA', 11);
Team.all['TEN'] = new Team('Tennessee', 'Titans', 'TEN', 11);
