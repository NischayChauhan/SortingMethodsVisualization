



var grid = [];
var wd;

var len = 100;
var done = 0;
var algo = "bubble";

var j = 0;

function getInputValue(){

	len = parseInt(document.getElementById("num").value);
	algo = document.getElementById("algo").value;

	for(var i=0;i<len;i++){
		grid.push(random(10,height));
	}

	for(var i=0;i<len;i++){
		rect(i*wd,(i+1)*wd,wd,grid[i]);
	}
	
	wd = width/len;
	
	j=0;

	done = 1;
}


function setup(){
	let cnv = createCanvas(700,600);
	cnv.parent('plotter');

}




function draw(){

	background("#00FF00");
	if(done==1){
		background(255);
		
		fill("yellow");

		for(var i=0;i<len;i++){
			rect(i*wd,0,wd,grid[i]);
		}

		if(algo=="bubble"){
			if(j<len){
				for(var i = j;i<len;i++){
					if(grid[i]>grid[j]){
						var temp = grid[i];
						grid[i] = grid[j];
						grid[j] = temp;
					}
				}
			}
			j++;
		}else if(algo=="insertion"){
			if(j<len){
		        var key = grid[j];  
		        j1 = j - 1;  		

		        while (j1 >= 0 && grid[j1] < key) 
		        {  
		            grid[j1 + 1] = grid[j1];  
		            j1 = j1 - 1;  
		        }  
		        grid[j1 + 1] = key;  

			}	
			j++;
		}else if(algo=="selection"){

			if(j<len-1){
		        // Find the minimum element in unsorted array  
		        min_idx = j;  
		        for (var j1 = j+1; j1 < len; j1++)  
			        if (grid[j1] > grid[min_idx])  
			            min_idx = j1;  
  				var temp = grid[min_idx];
				grid[min_idx] = grid[j];
				grid[j] = temp;

		    }
		    j++;
		}

		

	}
}







