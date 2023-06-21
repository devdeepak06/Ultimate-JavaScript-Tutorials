let count = 10;
function timer(){
    if(count == 0){
        console.log("Time Out");
        clearInterval(id);
        return;
    }
    console.log(count);
    count--;
}
let id = setInterval(timer, 1000);
