/* Genre
 * 
 * Contains the defined genres
 * 
 */
 
var Genre = function(name, desc, value){
	this.name = name;
	this.desc = desc;
	this.value = value;
}

Genre.all = {};
Genre.all['sports'] = new Genre('UNC athletics and sports', 'A category for UNC athletics and sports information', 1);
Genre.all['academic'] = new Genre('UNC classes','Basic class signup information or sakai information', 2);
Genre.all['studyAbroad'] = new Genre('UNC Study Abroad','Some UNC study abroad information', 3);
Genre.all['career'] = new Genre('UNC career information', 'information on career fairs, resume building, etc', 4);
Genre.all['comedy'] = new Genre('UNC comedic articles', 'Comedy on campus or comedic articles related to UNC', 5);
Genre.all['housing'] = new Genre('UNC housing information', 'General information or reports on housing for UNC', 6);

 
