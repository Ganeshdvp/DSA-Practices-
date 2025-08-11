// way-1 
let n = 8;   // 2

function sqrt(x){
    return Math.floor(x ** 0.5);
}
console.log(sqrt(n));
// time complexity :- O(1)
// space complexity :- O(1)


// way-2  binary search
let n2 = 9;  //2

function sqrt2(x){
    if(x == 0 || x == 1){
        return x;
    }
    let low = 1;
    let high = x;
    let result = 0;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(mid*mid == x){
            return mid;
        }
        else if((mid * mid) < x){
            result = mid;
            low = mid+1;
        }
        else{
            high = mid -1;
        }
    }
    return result;
}
console.log(sqrt2(n2));