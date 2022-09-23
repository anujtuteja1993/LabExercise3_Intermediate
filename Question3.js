// 3. Arrayoperations
// Let’s try 5 array operations.
// 1. Createanarraystyleswithitems“Jazz”and“Blues”.
// 2. Append“Rock-n-Roll”totheend.
// 3. Replacethevalueinthemiddleby“Classics”.Yourcodeforfindingthe
// middle value should work for any arrays with odd length.
// 4. Stripoffthefirstvalueofthearrayandshowit.
// 5. PrependRapandReggaetothearray.

//1.
let styles = ["Jazz","Blues"];
console.log(styles);

//2.
styles.push("Rock-n-Roll");
console.log(styles);

//3.
if((styles.length % 2 != 0)){
    const mid = Math.floor(styles.length / 2);
    styles[mid] = "Classics";
}
console.log(styles);

//4.
console.log(styles.shift());

//5.
styles.unshift("Rap", "Reggae");
console.log(styles);