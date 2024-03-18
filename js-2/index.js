//1. Verilmiş ədədlır siyahısındaki ədədlərin cəmini tapın qaytaran function
function arrSum(arr){
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result += arr[i]
    }
    return result
}

console.log("Array sum - ")
console.log(arrSum([7,11,-3,4,9,6]))

//2. Verilmiş arraydəki ən böyük ədədi tapın qaytaran function
function biggest(arr){
    let largest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }

    return largest;
}

console.log('Largest in array - ')
console.log(biggest([7,-3,4,9,98,6,14]))

//3. Verilmiş ədədin rəqəmləri cəmini tapıb qaytaran function
function sumOfDigits(number) {
    let sum = 0;
    if (number < 0) {
        number = -number; 
    }
    
    while (number > 0) {

        let digit = number % 10;
        sum += digit;
        number = (number-digit)/10
    }
    return sum;
}

console.log("Digit sum -")
console.log(sumOfDigits(-986))

//4. Verilmiş ədədlər siyahısındaki ən çox təkrarlanan ədədi tapıb qaytaran function
function mostRepeated(arr){
    arr.sort(function(a, b){return a - b});
    
    let maxCount = 0;
    let mostRepeatedNum;

    let currentNum = arr[0];
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentNum) {
            currentCount++;
        }
        else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                mostRepeatedNum = currentNum;
            }
            currentNum = arr[i];
            currentCount = 1;
        }
    }

    if (currentCount > maxCount) {
        mostRepeatedNum = currentNum;
    }

    return mostRepeatedNum;
}

console.log(mostRepeated([9,9,9,3,10,10,6,10,7,6,10]))