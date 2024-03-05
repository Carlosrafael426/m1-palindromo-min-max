function isPalindrome(str){
    let string = str.toLowerCase();
    let arrSpace = string.replace(/\s/g, '');
    let arrStr = arrSpace.split('');
    let arrReverse = ""
    
    for(let i = arrStr.length-1; i >=0; i--){
        arrReverse += arrStr[i] 
    }
    if(arrReverse === arrSpace){
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