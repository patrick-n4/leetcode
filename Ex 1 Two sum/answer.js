// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function twoSum(nums,target){
    nums=[3,2,4];
    target=6;
    let output=[];
    nums.forEach((element,index) => {
        for(i=0;i<=nums.length-1;i++){
           if(element+nums[i]===target){
               if(i!==index){
                output.push(index);
               }
            }
        }
    });
    console.log(output) 
}
twoSum()