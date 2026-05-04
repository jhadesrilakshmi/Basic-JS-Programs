let num=1234;
let rev=0;
for(let i=num;i>0;i=Math.floor(i/10)){
    rev=rev*10+i%10;
}
console.log(rev);