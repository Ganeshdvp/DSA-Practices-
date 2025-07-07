class RotateAnArray{
    public static void main (String args[]){
        int arr[] = {0, 4, 5, 6, 2, 1, 3};  // [6,2,1,3,0,4,5]
        int k = 3;

        reverse(arr,0,k-1);
        reverse(arr,k,arr.length-1);
        reverse(arr,0,arr.length-1);

        for(int i=0; i<arr.length;i++){
            System.out.print(arr[i] + " ");
        }
    }

    static void reverse(int[] arr,int start,int end){
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
// time complexity :- O(n) because first function runs upto r, second functions runs upto n-r, third one runs total - O(r+(n-r)+n)
//space complexity :- O(1)
