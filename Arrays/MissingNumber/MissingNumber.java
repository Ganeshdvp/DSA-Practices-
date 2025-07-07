class MissingNumber {
    public static void main (String args[]){
        int arr[] = {3,0,1};
        int actualSum = 0;

        for(int i =0; i<arr.length; i++){
            actualSum += arr[i];
        }

        int n = arr.length;
        int originalSum = n*(n+1)/2;

        System.out.print(originalSum-actualSum);
    }
}
// Time complexity :- O(n) because one loop and originalSum is constant time.
// Space complexity :- O(1)