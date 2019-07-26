var fillbigbox = document.getElementById("bigbox");

for (var i = 0; i < movies.length; i++) {
	fillbigbox.innerHTML += `<div class="content"><img src="${movies[i].image}">
	<div class="likeamount"><p>${movies[i].likes}</p></div>
	<div class="likebutton"><button class="knopf" id="${i}">Like &#x1F44D</button></div>
	<div class="filmtitle"><p>${movies[i].title}</p></div>
	<div class="desc"><p>${movies[i].description}</p></div>`;
}



// var knopfi= document.getElementsByClassName("knopf");
// var ende = document.getElementsByClassName("likeamount");





//   for(var i=0;i<btn.length;i++){
//   knopfi[i].addEventListener("click",function(){bigDisplay(this.getAttribute("id"))},false);
//     }


//    function pluseins(i){
//      largeoutput.innerHTML= `<b><p>Hello from up here!</p>
//      <img src="${person[i].pic}" class="bigpic"></b>`
//    }















// <button class="knopf" id="${i}">Like &#x1F44D</button>



// <div class="likebutton"><p>Like &#x1F44D ${movies[i].likes}</p></div>