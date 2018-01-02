let arr=[1,2,3,4,5,6,28,19,9,44];
let arr2=arr.join(" ").split(" ");
function compare(a,b) {
    return a-b;

}
arr.sort((a,b) => a > b);
arr2.sort()
console.log(arr2);
console.log(arr);
console.log(typeof (NaN))