function modifyArray(nums) {
    const newNums = nums.map(n => (n % 2 === 0) ? n * 2 : n * 3);
    return newNums;
}
