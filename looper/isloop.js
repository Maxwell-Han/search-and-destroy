'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let slow = linkedlist.head
  let fast = linkedlist.head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if(fast.value === slow.value) {
      return true
    }
  }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
