// Find Max Number On the given array

// const arr =[1,2,34,5,68,78,'_',0,-4];

const MaxElement=(arr,n)=>{
 if(n==0) return null;
 let maxNumber = arr[0];
 let minNumber = arr[0];
 for(let i = 0; i<n; i++){
     if(typeof arr[i] === 'number' &&  arr[i]>maxNumber){
          maxNumber = arr[i];
     }
     if(typeof arr[i] === 'number' &&  arr[i]<minNumber){
        minNumber = arr[i];
     }
 }
  return{ maxNumber , minNumber};  
}
const arr = [1,2,34,5,68,78,'_',0,-4];
var n = arr.length
const res = MaxElement(arr,n)
console.log(res)