
Owner.all = [];

Owner.all.push(new Owner('Ketan', 'Mayer-Patel'));
Owner.all.push(new Owner('Jeff', 'Forbes'));
Owner.all.push(new Owner('Zachary', 'Alinder', 'Z'));
Owner.all.push(new Owner('Carlos', 'Gomze', 'Los'));
Owner.all.push(new Owner('Alda', 'Leu-Dennis'));
Owner.all.push(new Owner('Vince', 'Sanchez'));
Owner.all.push(new Owner('Scott', 'Cooper', 'Scoop'));
Owner.all.push(new Owner('James', 'Moore', 'Jamo'));
Owner.all.push(new Owner('Chris', 'Garrett', 'CG'));
Owner.all.push(new Owner('Rich', 'Ginn', 'Ginn'));
Owner.all.push(new Owner('Chad', 'Elder', 'Elder'));
Owner.all.push(new Owner('Evan', 'Singer', 'Singer'));

Player.all = [];

Player.all.push(new Player('Aaron', 'Rodgers' , 'QB', 'GB', {}, [new StatLine(2012, 'GB', 16, 388, 606, 4844, 41, 10, 60 , 277, 3, 0, 0, 0, 0)]));
Player.all.push(new Player('Tom', 'Brady' , 'QB', 'NE', {}, [new StatLine(2012, 'NE', 16, 427, 667, 4936, 37, 11, 27 , 53 , 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Matthew', 'Stafford' , 'QB', 'DET', {}, [new StatLine(2012, 'DET', 16, 407, 656, 4852, 36, 15, 39 , 114, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Drew', 'Brees' , 'QB', 'NO', {}, [new StatLine(2012, 'NO', 16, 428, 649, 4932, 36, 17, 18 , 44 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Cam', 'Newton' , 'QB', 'CAR', {}, [new StatLine(2012, 'CAR', 16, 310, 508, 3756, 19, 16, 115, 667, 8, 0, 0, 0, 0)]));
Player.all.push(new Player('Michael', 'Vick' , 'QB', 'PHI', {}, [new StatLine(2012, 'PHI', 16, 286, 469, 3752, 23, 15, 87 , 636, 5, 0, 0, 0, 0)]));
Player.all.push(new Player('Matt', 'Ryan' , 'QB', 'ATL', {}, [new StatLine(2012, 'ATL', 16, 357, 575, 4257, 31, 14, 31 , 102, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Eli', 'Manning' , 'QB', 'NYG', {}, [new StatLine(2012, 'NYG', 16, 379, 642, 4365, 32, 18, 19 , 42 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Philip', 'Rivers' , 'QB', 'SD', {}, [new StatLine(2012, 'SD', 16, 354, 553, 4537, 28, 15, 30 , 42 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Tony', 'Romo' , 'QB', 'DAL', {}, [new StatLine(2012, 'DAL', 16, 343, 544, 4242, 28, 12, 13 , 55 , 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Ben', 'Roethlisberger', 'QB', 'PIT', {}, [new StatLine(2012, 'PIT', 16, 331, 526, 4156, 26, 16, 31 , 90 , 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Peyton', 'Manning' , 'QB', 'DEN', {}, [new StatLine(2012, 'DEN', 16, 374, 575, 4195, 27, 13, 15 , 17 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Robert', 'Griffin III' , 'QB', 'WAS', {}, [new StatLine(2012, 'WAS', 16, 297, 530, 3550, 20, 15, 175, 367, 3, 0, 0, 0, 0)]));
Player.all.push(new Player('Ryan', 'Fitzpatrick' , 'QB', 'BUF', {}, [new StatLine(2012, 'BUF', 16, 333, 554, 3769, 23, 17, 47 , 256, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Joe', 'Flacco' , 'QB', 'BAL', {}, [new StatLine(2012, 'BAL', 16, 314, 514, 3755, 23, 11, 34 , 74 , 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Josh', 'Freeman' , 'QB', 'TB', {}, [new StatLine(2012, 'TB', 16, 307, 496, 3419, 20, 17, 58 , 299, 2, 0, 0, 0, 0)]));
Player.all.push(new Player('Carson', 'Palmer', 'QB', 'OAK', {}, [new StatLine(2012, 'OAK', 16, 299, 482, 3758, 23, 16, 16 , 31 , 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Jay', 'Cutler', 'QB', 'CHI', {}, [new StatLine(2012, 'CHI', 16, 287, 463, 3429, 21, 16, 40 , 166, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Andy', 'Dalton', 'QB', 'CIN', {}, [new StatLine(2012, 'CIN', 16, 303, 531, 3558, 22, 15, 20 , 41 , 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Alex', 'Smith', 'QB', 'SF', {}, [new StatLine(2012, 'SF', 16, 316, 544, 3373, 21, 13, 49 , 165, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Matt', 'Schaub', 'QB', 'HOU', {}, [new StatLine(2012, 'HOU', 16, 308, 481, 3655, 22, 13, 14 , 35 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Christian', 'Ponder', 'QB', 'MIN', {}, [new StatLine(2012, 'MIN', 16, 298, 480, 3363, 18, 12, 67 , 275, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Sam', 'Bradford', 'QB', 'STL', {}, [new StatLine(2012, 'STL', 16, 328, 529, 3545, 19, 14, 23 , 49 , 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Russell', 'Wilson', 'QB', 'SEA', {}, [new StatLine(2012, 'SEA', 16, 278, 464, 3245, 17, 13, 50 , 250, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Matt', 'Cassel', 'QB', 'KC', {}, [new StatLine(2012, 'KC', 16, 299, 507, 3245, 22, 13, 23 , 84 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Andrew', 'Luck', 'QB', 'IND', {}, [new StatLine(2012, 'IND', 16, 268, 412, 3256, 17, 15, 177, 195, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Jake', 'Locker', 'QB', 'TEN', {}, [new StatLine(2012, 'TEN', 16, 279, 464, 3344, 19, 11, 26 , 82 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Mark', 'Sanchez', 'QB', 'NYJ', {}, [new StatLine(2012, 'NYJ', 16, 259, 455, 2959, 20, 15, 29 , 104, 1, 0, 0, 0, 0)]));
Player.all.push(new Player('Brandon', 'Weeden', 'QB', 'CLE', {}, [new StatLine(2012, 'CLE', 16, 278, 455, 3185, 15, 14, 20 , 72 , 0, 0, 0, 0, 0)]));
Player.all.push(new Player('Blaine', 'Gabbert', 'QB', 'JAC', {}, [new StatLine(2012, 'JAC', 16, 255, 411, 2956, 16, 13, 28 , 131, 0, 0, 0, 0, 0)]));
Player.all.push(new Player('John', 'Skelton', 'QB', 'ARI', {}, [new StatLine(2012, 'ARI', 16, 204, 328, 2232, 13, 9, 25 , 97 , 0, 0, 0, 0, 0) ]));
Player.all.push(new Player('Ryan', 'Tannehill', 'QB', 'MIA', {}, [new StatLine(2012, 'MIA', 16, 174, 295, 2067, 11, 11, 25 , 76 , 1, 0, 0, 0, 0)]));

Player.all.sort(function(a,b) {
	if (a.last < b.last) {
		return -1;
	} else if (a.last > b.last) {
		return 1;
	} else {
		if (a.first < b.first) {
			return -1;
		} else if (a.first > b.first) {
			return 1;
		} else {
			if (a.team.city < b.team.city) {
				return -1;
			} else if (a.team.city > b.team.city) {
				return 1;
			} else {
				return 0;
			}
		}
	}
});


