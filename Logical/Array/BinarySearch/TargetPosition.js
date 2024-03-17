const SearchTarget=(nums,target)=>{
    let lt=0, rt = nums.length;
    while(lt<rt){
        const mid = lt + Math.floor((rt-lt)/2) // Fint middle
        if(nums[mid] === target){
            return mid
        }else if(nums[mid]>target){
            rt = mid;
        }else{
            lt = mid + 1;
        }
    }
    return lt;
}

const arr=[1,3,4,7,8,9];
console.log(SearchTarget(arr,2))
//o/p 2