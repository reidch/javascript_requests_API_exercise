var app = function(){
	var url = 'https://api.punkapi.com/v2/beers';
	makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.addEventListener('load', callback);
	request.send();
}

var requestComplete = function(){
	if(this.status !== 200) return;
	var jsonString = this.responseText;
	var beers = JSON.parse(jsonString);
	populateList(beers);
}

var populateList = function(beers){
	var ul = document.getElementById('beer-list');

	for(var beer of beers){
		var nameLi = document.createElement('li');
		nameLi.innerText = beer.name;
		var imageLi = document.createElement('img');
		imageLi.src = beer.image_url;
		nameLi.appendChild(imageLi);
		ul.appendChild(nameLi);
	};
}

window.addEventListener('load', app);
