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
    let middleIndex = Math.floor(list.length / 2);

    if (list.length < 1 || 
        list[list.length - 1] < element || 
        list[0] > element || 
        (list.length == 1 && list[0] !== element)) {
        return -1;
    }

    else if (list[middleIndex] == element) {
        return middleIndex;
    }

    else if (list[middleIndex] > element) {
        return binarySearch(list.slice(0, middleIndex--), element);
    }

    else if (list[middleIndex] < element) {
        return binarySearch(list.slice(middleIndex++, list.length), element) + middleIndex;
    }
}