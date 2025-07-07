import java.util.ArrayList;

class IntersectionTwoArrays{
    public static void main (String args[]){
        int nums1[] = {1,2,2,1};
        int nums2[] = {2,2};

        ArrayList<Integer> newArray = new ArrayList<>();

        for(int i=0; i<nums1.length; i++){
            for(int j=0; j<nums2.length; j++){
                if(nums1[i] == nums2[j] && !newArray.contains(nums1[i])){
                    newArray.add(nums1[i]);
                }
            }
        }
        System.out.print(newArray);
    }
}
//Time complexity :- O(m*n*k)
// Space complexity :- O(m+n)