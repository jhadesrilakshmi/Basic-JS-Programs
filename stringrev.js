let num=5678;
let rev=0;
for(;num>0;num=Math.floor(num/10)){
    let rem=num%10;
    rev=rev*10+rem;
}
console.log(rev);
