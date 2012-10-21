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
Genre.all[classes] = new Genre('UNC classes','Basic class signup information or sakai
	information');
Genre.all[studyabroad] = new Genre('UNC Study Abroad','Some UNC study abroad information
	');
Genre.all[career] = new Genre('UNC career information', 'information on career fairs,
	resume building, etc');

 
