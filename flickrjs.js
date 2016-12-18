$('document').ready(function(){
	console.log("js wired");
	$('form').submit(function(e){
		e.preventDefault();
		var searchTerms = $("#img-category").val();
		console.log(searchTerms);
		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ecb0a01b078fc1b7e83e26ab6a0ccd72&tags="+searchTerms+"&safe_search=1&per_page=25&format=json&nojsoncallback=1"
		$.ajax({
			type: "GET",
			url: url,
			success: showImg,
			error: handleError
		});
	});
});

function showImg(response){
	console.log("Success");
	console.log(response);
	$("#scroll-area").html("");
	$("#img-category").val("");
	response.photos.photo.forEach(function(img){
		var imgSrc = "http://farm" + img.farm + ".static.flickr.com/" + 
        img.server + "/" + img.id + "_" + img.secret + "_" + "b.jpg";
		var html = "<img src='" + imgSrc +"'>";
		$("#scroll-area").append(html)
	});
}


function handleError(err){
	console.log("Error");
	console.log(err);
}