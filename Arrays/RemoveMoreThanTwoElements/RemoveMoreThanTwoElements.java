import java.util.ArrayList;

public class RemoveMoreThanTwoElements {
    public static void main (String args[]){
        int arr[] = {0,0,0,1,2,2,2,2,2,3,3,4};
        ArrayList<Integer> newArray = new ArrayList<>();

        for(int i=0; i<arr.length; i++){
            int count =0;
            for(int j=i+1; j<arr.length; j++){
                if(arr[i] == arr[j]){
                    count++;
                }
            }
            if(count<2){
                newArray.add(arr[i]);
            }
        }

        System.out.println(newArray);
    }
}
// Time complexity :- O(n*2)
// space complexity :- O(n)