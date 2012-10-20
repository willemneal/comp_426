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
		 // $('body').attr("flickrpic",t_url);
		 //alert("api called")
		 $('#flickr').attr("src",t_url);
		 //$('body').css('background-image','url('+t_url+')');
		 //prompt($('body').css('background-image'));
		 
		}


$(document).ready(function () {
	//Function to get JSON from flickr webservices
	$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=805470a8b0ea366a9acbc219cbe895cb&tags=University+of+North+Carolina+at+Chapel+Hill%2CUNC%2CBasketball%2Ctarheel%2Cdeandome&sort=interestingness-desc&format=json&jsoncallback=?",jsonFlickrApi)
	
	//Event for the form under picture so that user can search pictures
	$('#the_form').on('submit', function(e) {
		var s = $('#the_form input[name="itemval"]').val().split(' ').join('+').split(',').join("%2C");
		//alert(s);
		$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=805470a8b0ea366a9acbc219cbe895cb&tags="+s+"&sort=interestingness-desc&format=json&jsoncallback=?",jsonFlickrApi)
			e.preventDefault();
	});
});

