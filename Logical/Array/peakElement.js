// Problem Statement
// Find a peak element which is not smaller than its neighbours
// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.



function findPeak(arr,n){
if(n==1) return 0;
if(arr[0]>= arr[1]) return 0;
if(arr[n-1]>= arr[n-2]) return n-1;

// For checking other condition

for(var i=0; i<n-1; i++){
    //For Checking if the neighbours are smaller
    if(arr[i]>=arr[i-1] && arr[i]>= arr[i+1]){
        //return arr[i];// For Peak value
        return i; //Peak index value
    }
}

}
const arr=[1,3,20,4,1,0]
const n = arr.length
const res = findPeak(arr,n)
console.log(res)

// Time complexity: O(n), One traversal is needed so the time complexity is O(n)
// Auxiliary Space: O(1), No extra space is needed, so space complexity is constant
/*<----------------------------------->*/

// Using Binary Search
// Using Devide And Conquer


function findPeakUtil(arr,low,high,n){
//Find Index of middle Element
//Formula low+(high-low)/2

var mid = low + parseInt((high-low)/2);
//Compare mid element with its neighbours (if neighbours exist)

if((mid == 0 || arr[mid-1] <= arr[mid] && (mid = n-1 || arr[mid+1]<= arr[mid]))){
    return mid;
     //if mid is not peak element
    //left neighbour is greater than it
    // then left half must be a peak element
}else if(mid>0 && arr[mid-1]> arr[mid]){
   
return findPeakUtil(arr,low,(mid-1),n);
}else{
    return findPeakUtil(arr,(mid+1),high,n)
}
// A wrapper over recursive function findPeakUtil()
 
function findPeak(arr, n)
{
    return findPeakUtil(arr, 0, n - 1, n);
}
}

// Driver Code

console.log("Index of a peak point is "
    + findPeak(arr, n));


// Time Complexity: O(log N), Where N is the number of elements in the input array. 
// Auxiliary Space: O(log N), As recursive call is there, hence implicit stack is used.