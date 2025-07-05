import java.util.Arrays;

class RemoveDuplicates{
    public static void main (String args[]){
        int arr[] = {0, 0, 1, 2, 2, 2, 3, 4, 0};
        int k = 0;

        for(int i=1; i<arr.length; i++){
            if(arr[i] != arr[k]){
                k++;
                arr[k] = arr[i];
            }
        }
        for(int j=0; j<=k-1; j++){
            System.out.print(arr[j] +" ");
        }
    }
}
// Time complexity :- O(n)
// Space complexity :- O(1)