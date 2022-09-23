// 4. Translateborder-left-widthtoborderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased. Examples:
//   camelize("background-color") == 'backgroundColor';
//   camelize("list-style-image") == 'listStyleImage';
//   camelize("-webkit-transition") == 'WebkitTransition';


function camelize(str){
    let index = str.search(/-/g);
    if(index != -1){
        let string = str.replace(/-/g, '');
        return string;
    }
    return str;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize("Hello"));
