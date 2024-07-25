let num: number[] =[1,2,3,4,5,6,7,8,9];
for(let i = 0; i <num.length; i++) {
    let suffix: string;
    if(num[i] === 1) {
   suffix ="st";
    }else if(num[i] ===2){
        suffix ="nd";
    }else if(num[i] ===3){
        suffix ="rd";
    }else{
        suffix ="th";
    }
    console.log(`${num[i]}${suffix}`);
}