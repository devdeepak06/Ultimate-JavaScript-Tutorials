// Write your code here:
const num = 5;
const isFibonacci = num => {
   if(num === 0 || num === 1){
      return true;
   }
   let prev = 1;
   let count = 2;
   let temp = 0;
   while(count <= num){
      if(prev + count === num){
         return true;
      };
      temp = prev;
      prev = count;
      count += temp;
   };
   return false;
};
console.log(isFibonacci(num));