function getSecondLargest(nums) {
    let uniqueArr = [...new Set(nums)]
    uniqueArr.sort((a,b)=> b-a)
    return uniqueArr[1];
}
