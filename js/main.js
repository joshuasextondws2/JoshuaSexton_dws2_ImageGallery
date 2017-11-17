window.addEventListener('load', function(e){

//instantiate new object
	var request = new XMLHttpRequest();

//build a query string with a template literal
	const api = 
	'https://api.unsplash.com/search/photos/?query=travel&per_page=9&client_id=6f7fd4661a518f00989024f56304fce562f2744d92608467a3e47aaa4fbcee16';


//open the request passing in a type
request.open('GET', api, true);

//listen to the onload event.
request.onload = function(){
	//check for success of status codes
	if(request.status >= 200 && request.status <400){
		//parse our data from json
		var data = JSON.parse(request.responseText);
		
		if(data){	
			var i;
        	for (i = 0; i < 9; i++) {
        		var newLi = document.createElement('Li');
        		var newImage = document.createElement('img');
        		var newDiv = document.createElement('div');
        		newDiv.id= "overlay";
        		var para = document.createElement("P");  
        		var p = document.createTextNode(data.results[i].user.name); 
        		para.appendChild(p);  
        		para.id="name";                 
				var para2 = document.createElement("P"); 
				var p2 = document.createTextNode(data.results[i].likes); 
				para2.appendChild(p2);  
				para2.id="likes"                 
				newImage.src = data.results[i].urls.thumb; 
        		newImage.srcset = data.results[i].urls.regular +" 1080w,"+ data.results[i].urls.small+" 400w ," + data.results[i].urls.thumb+" 200w";
        		newImage.sizes= "(max-width:300px) 100vw,(max-width:500px) 20vw, (max-width: 700px) 33.3vw";
        		var resultsList = document.getElementById('galleryList');
        		resultsList.appendChild(newLi);
        		newLi.appendChild(newImage);
        		newLi.appendChild(newDiv);
        		newDiv.appendChild(para);
        		newDiv.appendChild(para2);
}
		}
			} else {
		// code for Response Errors
			
			console.log('response error', request)
	  }
	  }


//listen for connection errors
request.onerror = function(){
	//code for connection errors
	console.log('connection error')

}
//fire off the request
request.send();
})

document.querySelector("h2").onclick = function() {changeClass()}

function changeClass(){
	const travel = document.querySelector("h1");
	travel.className = "globe"; 

}
