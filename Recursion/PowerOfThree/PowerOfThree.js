let n = 27; //true

if(n<1){
    console.log('false');
}
else if(n==1){
    console.log('true');
}
else if(n==2){
    console.log('false');
}
else{
    while( n % 3 == 0){
        n = n/3;
    }
    if( n == 1){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
// Time complexity :- O(logn)
// Space complexity :- O(1)