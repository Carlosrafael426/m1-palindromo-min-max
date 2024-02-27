function isPalindrome(str){
    let string = str.toLowerCase();
    let arrSpace = string.replace(/\s/g, '');
    let arrStr = arrSpace.split('');
    let reverse = arrStr.reverse();
    let strReverse = reverse.join('');
    if(arrSpace === strReverse){
        return true
    } 
    return false
}

function arrayMaxMin(arr){
    let numbers = arr;
    let arrMax = 0;
    let arrMin = arr[0];
    for(let i = 0; i < numbers.length; i++){ 
        if(numbers[i] > arrMax ){
            arrMax = numbers[i];
        }
        if(numbers[i] < arrMin){
            arrMin = numbers[i]
        }
     }
     return [arrMin, arrMax];       
    }