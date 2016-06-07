$(document).ready(function(){

//var squaresPerSide = 4;
//var sideLength = 200;
//var boxTotal = Math.pow(squaresPerSide,2) + 1;





makeGrid(4, 17, 200);



$(":button").click(function(){ 
	var grid = prompt("How many boxes per line?");
	$('div').remove();
    var sideLength = Math.floor(800/grid);
    var boxTotal = Math.pow(grid,2)+1;
    console.log(grid, sideLength, boxTotal);
    //makeGrid(4, 17, 200);
    makeGrid(grid, boxTotal, sideLength);
});

function makeGrid(squaresPerSide, boxTotal, sideLength){
	
	for(x=0;x<boxTotal;x++){
	
	$('div').width(sideLength).height(sideLength);
	var div  = document.createElement('div');
	if (x%squaresPerSide==0){
		div.setAttribute('class','myclass');
	}
	
	$('body').append(div);

}
	$('div').hover(
	function(){
		$(this).css("background-color","white");
	},
	function(){
		$(this).css("background-color", "navy");
	}

);
}

});