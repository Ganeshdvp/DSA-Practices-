class ReverseAnArray {
    public static void main (String args[]){
        int arr[] = {1,2,6,7,3,5};
        int i = 0;
        int index = arr.length-1;

        while(i< index){
            int temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            i++;
            index--;
        }
        
        for(int j=0; j<arr.length; j++){
            System.out.print(arr[j] + " ");
        }

    }
}
// Time complexity :- O(n)
// Space complexity :- O(1)