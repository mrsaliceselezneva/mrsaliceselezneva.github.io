
 function draw(){	
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(150, 100);
    ctx.stroke();
 }
 
 function draw_hangman(){
	 var button = document.getElementById("letter");
     button.onclick = draw();
 }
 
 function start(){
	 letters = document.getElementById("letters");
	 for (var i = 65; i < 91; ++i){
		 var button = document.createElement("button");
		 button.type = "click";
		 button.id = "click";
		 button.onClick = "draw_hangman";
		 button.name = String.fromCharCode(i);
		 button.appendChild(document.createTextNode(String.fromCharCode(i)));
		 letters.appendChild(button);
	 }
	
 }

/*document.addEventListener('click', function draw_hangman(){
	 var button = document.getElementById("letter");
     button.onclick = draw();
 });*/
 

 