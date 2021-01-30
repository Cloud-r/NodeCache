// Trying to implement a similar heapq which is present in the python stl
// The apis to implement - heapify, heappush, heappop
// assume the every object in the heap is a obj with this structure: {value: number, data: any}

function getParentIndex(currentIndex) {
    isEven = currentIndex % 2 === 0;
    if(!isEven) return Math.ceil(currentIndex / 2) - 1 
    return Math.ceil(currentIndex / 1) - 2
}

/*
How does a heapify work
1. element gets inserted at the end of the array
2. check with the parent index element
3. if the parent is greater than the child. then swap and continue from 2
4. else end
*/

/*
How does insert in to the heap work
same as the steps mentioned i the heap
*/

/*
How does delete in the heap work
1. remove the first element in the array
2. take the last element in the array and put it in the start
3. get the min child of that index
4. if the childMin is lesser than the current element swap and continue from 3
5. else end
*/


/**
 * Function that takes in an array and returns a heapfied array.
 * @param {Array} arg0 - the array that has to heapified 
 * @returns {Array} The heapified array
 */
function heapify(arg0) {
    const ans = [];
    return ans;
}