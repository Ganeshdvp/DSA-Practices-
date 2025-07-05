class SecondLargestElement{
    public static void main (String args[]){
        int arr[] = {3,5,1,2,4,5};
        int large = Integer.MIN_VALUE;
        int secondLarge = Integer.MIN_VALUE;

        for(int i=0; i<arr.length; i++){
            if(arr[i] > large){
                secondLarge = large;
                large = arr[i];
            }
            if(arr[i] < large && arr[i] > secondLarge){
                secondLarge = arr[i];
            }
        }

        if(secondLarge == Integer.MIN_VALUE){
            System.out.println("Not found");
        }
        else{
            System.out.println(secondLarge);
        }
    }
}
// Time complexity:- O(n) because we are using one loop.
// Space complexity:- O(1)