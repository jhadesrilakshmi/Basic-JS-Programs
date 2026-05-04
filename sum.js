let a=1020;
let sum=0;
for(;a>0;a=Math.floor(a/10)){
    let rem=a%10;
    sum+=rem;
}
console.log(sum);