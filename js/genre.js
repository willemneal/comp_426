/* Genre
 * 
 * Contains the defined genres
 * 
 * 
 * 
 * 
 */
 var Genre = function (name, description) {
 	this.name = name;
 	this.description = descrition;
 }
 Genre.all = {};
 Genre.all[sports] = new Genre('UNC athletics and sports','A category for UNC athletics
 	and sports information');
Genre.all[academic] = new Genre('UNC classes','Basic class signup information or sakai
	information');
Genre.all[studyAbroad] = new Genre('UNC Study Abroad','Some UNC study abroad information
	');
Genre.all[career] = new Genre('UNC career information', 'information on career fairs,
	resume building, etc');
Genre.all[comedy] = new Genre('UNC comedic articles', 'Comedy on campus or comedic
 articles related to UNC');
Genre.all[housing] = new Genre('UNC housing information', 'General information or 
 reports on housing for UNC');

 
