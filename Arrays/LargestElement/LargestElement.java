class LargestElement{
    public static void main (String args[]){
        int arr[]= {10,20,4,90,80,20};
        int max = arr[0];
        
        for(int i=0; i< arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        System.out.println(max);
    }
}
// Time complexity :- O(n) because we only iterate the array one time.
// Space Complexity :- O(1) because we are using the constant variable (max) only. 