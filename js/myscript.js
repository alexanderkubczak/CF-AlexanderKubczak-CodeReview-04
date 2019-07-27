var fillbigbox = document.getElementById("bigbox");

for (var i = 0; i < movies.length; i++) {
	fillbigbox.innerHTML += `<div class="content"><img src="${movies[i].image}">
	<div class="likeamount"><p id="like">${movies[i].likes}</p></div>
	<div class="likebutton"><button class="knopf" id="${i}">Like &#x1F44D</button></div>
	<div class="filmtitle"><p>${movies[i].title}</p></div>
	<div class="desc"><p>${movies[i].description}</p></div>`;

	}