/* 
 Given one array and a size, write a function that chunks the array into 
 subarray of that given size. 
 E.g  chunkArray([1,2,3,4,5, 6], 2) // should return [[1,2], [3,4], [5,6]]
*/

// function chunkArray(array, size) {
//     const chunks = [];

//     for(let i=0; i<array.length/size; i++){
//         chunks.push(array.slice(i*size, (i+1)*size))
//     }
    
//     return chunks
// }

function chunkArray(array, size) {
    const chunks = []

    for(value of array) {
        let lastArray = chunks[chunks.length -1] //lastArray is a reference of the last index of chunks
        if(!lastArray || lastArray.length === size) {
            chunks.push([value])
        } else {
            lastArray.push(value)
        }
    }
    return chunks
}

console.log(chunkArray([1,2,3,4,5, 6], 2))