let obj = {
    name: "Pradosh",
    age: 111,
    hairColor: "Black",
    likes: "Food"
};

function invertKeyVal(obj) {
    let targetObj = {};
    for(let [key, value] of Object.entries(obj)){
        targetObj[value] = key;
    }
    return targetObj;
}
console.log(invertKeyVal(obj));