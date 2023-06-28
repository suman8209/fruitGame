//Giving random background color to each fruit

const fruits=document.querySelectorAll(".fruit")
        function giveRandomColor(elem){
            var letter = "0123456789ABCDEF";
            for (var j=0; j<fruits.length; j++){
            
            var color = "#";
            for (var i = 0; i < 6; i++) 
            color += letter[Math.floor(Math.random() * letter.length)];
        console.log(color)
        	fruits[j].style.background=color;

            }
			}	
        
       
        giveRandomColor(fruits)

        fruits .forEach((fruit)=>{
        	fruit.addEventListener("click",()=>{
        		fruit.remove();
        	});
        });
