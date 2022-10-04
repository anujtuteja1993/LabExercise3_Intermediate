function unique(arr){
    var uniqueArray = [...new Set(arr)]; //nice! sets are always unique, so great idea
    return uniqueArray;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values));