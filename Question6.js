function unique(arr){
    var uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values));