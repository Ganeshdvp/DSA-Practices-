class CheckSortedArray {
    public static void main (String args[]){
        int arr[] = {1,2,3,1,4,5};
        boolean checking = true;

        for(int i = 1; i<arr.length; i++){
            if(arr[i] < arr[i-1]){
                checking = false;
                break;
            }
        }

        if(checking == true){
            System.out.println("sorted its");
        }
        else{
            System.out.println("not sorted");
        }
    }
}
// Time complexity:- O(n) because of loop
// Space complexity:- O(1) 