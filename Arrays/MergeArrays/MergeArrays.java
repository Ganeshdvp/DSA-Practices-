import java.util.Arrays;

class MergeArrays {
    public static void main (String args[]){
        int arr1[] = {0,0,1,0,0};
        int arr2[] = {0,4,5,6};
        int a = 3;
        int b = 2;

        int x = a-1;
        int y = b-1;
        int k = a+b-1;

        while(y >= 0){
            if(x >=0 && arr1[x] > arr2[y]){
                arr1[k] = arr1[x];
                x--;
            }
            else{
                arr1[k] = arr2[y];
                y--;
            }
            k--;
        }
        System.out.println(Arrays.toString(arr1));   // here we can't print arrays directly so!
    }
}
// Time complexity :- O(a+b)
// Space complexity :- O(1)