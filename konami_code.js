
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


const konami = document.body

konami.addEventListener('keydown', function(e) {

function init() {
  
  let index = 0;
  
    var inputKey = codes[e.key];
  
    var requiredkey = codes[index];
    
    if (inputKey === requiredkey) { 
      index++;
    
    if (index === codes.length) { 
      
      alert("Hurray! You get 30 lives!") ;
      
      index = 0;
    
      }  
    } else { 
      index = 0;
    }
  }
})