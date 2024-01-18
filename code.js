/*
Author: Isaiah Elston
Project: Binary Search

NOTE: I have very little experience with JavaScript, so I am teaching myself as I go. Therefore, I will be including my sources
      to seemingly trivial features in the beginning of the class...

SOURCES:

To learn more about the Binary Search function (I did not take COSC 2030 at UW and have not run into Binary Search prior to 
this course...)
https://www.geeksforgeeks.org/binary-search/#

For Math.floor()
https://stackoverflow.com/questions/4228356/how-to-perform-an-integer-division-and-separately-get-the-remainder-in-javascr

For .indexOf():
https://stackoverflow.com/questions/7346827/how-to-find-the-array-index-with-a-value
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/

function binarySearch(list, element) {
    if (list.length > 0) {
        var middleIndex = Math.floor((0 + list.length) / 2)
    } else {return -1}
    if (middleIndex == list.indexOf(element)) {
        return list.indexOf(element);
    } else if (middleIndex > list.indexOf(element)) {
        binarySearch(list.slice(0, middleIndex), element)
    } else if (middleIndex < list.indexOf(element)) {
        binarySearch(list.slice(middleIndex, list.length + 1), element)
    } else {
        return -1;
    }
}