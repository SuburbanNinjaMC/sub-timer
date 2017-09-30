alert("Initialized.");
console.log("CONSOLE: Sub Timer Installed.");
var a = prompt("How many minutes should the interval be?");
var b = a * 60 * 1000;
if (b == 0) {
    b = 15 * 60 * 1000;
    alert(b);
}
setInterval(function(){ 
    for (var i = 0; i < 5; i++) {
			     alert("TAKE AN EYE BREAK"); 
    }
}, b);
