// way-1  bitwise operator
let n =16;  // true

if((n & n-1) == 0 && n>0){
    console.log('true')
}
else{
    
}
// Time complexity :- O(1)
// space complexity :- O(1)


//way-2
let m = 16;

if(m<1){
    console.log('false');
}
else{
    while(m%2 == 0){
        m = m/2; 
    }
    if(m==1){
        console.log('true');
    }
    else{
        console.log('false');
    }
}