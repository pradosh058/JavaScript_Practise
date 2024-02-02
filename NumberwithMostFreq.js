const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

function numberFrequency(arr) {
    let obj = {};
    let maxCount = 0;
    let res = 0;

    for(let i of arr) {
        if(i in obj) {
            obj[i] = obj[i] + 1;
        } else {
            obj[i] = 1;
        }
    }

    for(let [key,value] of Object.entries(obj)){
        if(maxCount < value) {
            maxCount = value;
            res = key;
        }
    }
    //Finding the max if multiple number have same frequency
    for(let [key, value] of Object.entries(obj)) {
        res = maxCount == value && key > res ? key :res;
    }
    return res;
}


console.log(numberFrequency(numbers))