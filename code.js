/*
Author: Isaiah Elston
Project: Binary Search

NOTE: I have very little experience with JavaScript, so I am teaching myself as I go. Therefore, I will be including my sources
      to seemingly trivial tasks in the beginning of the class...

SOURCES:

To learn more about the Binary Search function (I did not take COSC 2030 at UW and have not run into Binary Search prior to 
this course...)
https://www.geeksforgeeks.org/binary-search/#

For Math.floor()
https://stackoverflow.com/questions/4228356/how-to-perform-an-integer-division-and-separately-get-the-remainder-in-javascr
*/

function binarySearch(list, element) {
    let leftBound = 0;
    let rightBound = list.length;

    do {
        let middleIndex = Math.floor(leftBound + ((rightBound - leftBound) / 2));
        if (list[middleIndex] == element) {
            return middleIndex;
        } else if (list[middleIndex] > element) {
            rightBound = middleIndex--;
        } else if (list[middleIndex] < element) {
            leftBound = middleIndex++;
        } else {
            return -1;
        }
    } while (rightBound >= 1);
}