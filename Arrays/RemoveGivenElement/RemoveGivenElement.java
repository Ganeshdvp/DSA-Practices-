public class RemoveGivenElement {
    public static void main(String args[]){
        int arr[] = {3,2,2,3};
        int val = 3;
        int k = 0;

        for(int i=0; i< arr.length; i++){
            if(arr[i] != val){
                arr[k] = arr[i];
                k++;
            }
        }
        
        for(int j=0; j<=k-1 ; j++){
            System.out.print(arr[j] + " ");
        }
    }
}
// Time complexity :- O(n)
// space complexity:- O(1)
