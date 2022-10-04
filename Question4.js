// 4. Translateborder-left-widthtoborderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased. Examples:
//   camelize("background-color") == 'backgroundColor';
//   camelize("list-style-image") == 'listStyleImage';
//   camelize("-webkit-transition") == 'WebkitTransition';


function camelize1(str){
    let index = str.search(/-/g);
    if(index != -1){
        let string = str.replace(/-/g, ''); //this just removes the dashes, but doesn't capitalise the first letter
        return string;
    }
    return str;
}

function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
  

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize("Hello"));
