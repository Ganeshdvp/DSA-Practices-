import java.util.Arrays;

class MovesZerosToEnd {
    public static void main (String args[]){
        int arr[] = {0,0,2,0,3,4,2,1,0};   //output:- [2.3,4,2,1,0,0,0,0]
        int j =0;

        for(int i=0; i<arr.length; i++){
            if(arr[i] != 0){
                arr[j] = arr[i];
                j++;
            }
        }
        while(j < arr.length){
            arr[j] = 0;
            j++;
        }
        System.out.println(Arrays.toString(arr));
    }
}
// Time complexity :- O(n)
// space complexity :- O(1)