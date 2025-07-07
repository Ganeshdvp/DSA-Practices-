class MajorityElement{
    public static void main(String args[]){
        int arr[] = {3,2,3};
        int candidate = 0;
        int count = 0;

        for(int i=0; i<arr.length; i++){
            if(count == 0){
                candidate = arr[i];
            }
            if(arr[i] == candidate){
                count++;
            }
            else{
                count--;
            }
        }
        // verification for majority element exist or not?
        int count1 =0;
        for(int i=0; i<arr.length; i++){
            if(arr[i] == candidate){
                count1++;
            }
        }
        if(count1 > arr.length /2){
            System.out.println(candidate);
        }
        else{
            System.out.print("not exists majority element");
        }
    }
}
// Time complexity :- O(n)
// Space complexity :- O(1)