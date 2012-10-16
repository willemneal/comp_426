function jsonFlickrApi(rsp) {
		 if (rsp.stat != "ok"){
		 	document.writeln(rsp.stat);
		  return;
		 }
		 
		 var s = "";
		 var randomPic = function(){
		 var i = Math.random();
		 i = i * 100;
		 i = Math.ceil(i);

		 return i;
		}
		 var i = randomPic();
		 photo = rsp.photos.photo[ i ];

		 t_url = "http://farm" + photo.farm +
		 ".static.flickr.com/" + photo.server + "/" +
		 photo.id + "_" + photo.secret + "_" + "m.jpg";
		 
		 p_url = "http://www.flickr.com/photos/" +
		 photo.owner + "/" + photo.id;
		 
		 s =  '<img alt="'+ photo.title + '"src="' + t_url + '"/>'  ;
		 
		 //prompt(this);
		 $('#flickr').text("<img src="+t_url+">");
		 //prompt($('body').css('background-image'));
		 //this tells the JavaScript to write
		 //everything in variable "s" onto the page
		 
		}
