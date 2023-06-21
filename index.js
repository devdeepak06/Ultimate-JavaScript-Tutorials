var abc = setInterval(counting, 300);
var count = 0;

function counting() {
    console.log(count++);
    if(count == 5) {
        clearInterval(abc);
    }
}