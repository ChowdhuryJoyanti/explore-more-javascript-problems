const friends = [ 12, 24, 35, 45, 54, 67, 45, 67, 78, 89, 90];

// removes elements from an array 
// and if necesaary,inserts new elements in the array
// returning th deleted elements
// will change the original array




const partial = friends.splice(3, 5 ,99, 876, 8799);
console.log(partial)
console.log(friends)