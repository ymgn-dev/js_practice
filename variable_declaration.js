// 再代入不可
const bookTitle = 'JavaScript Primer';
console.log(bookTitle);

// 再代入可能
let bookTitle2;
console.log(bookTitle2); // undefined(値が未定義)

bookTitle2 = 'JavaScript Primer';
console.log(bookTitle2);

// varは同じ名前の変数を再定義できる問題がある(変数の巻き上げ)
// varを使うことは避けた方がいい
var a = 1;
var a = 2;

// constは定数ではない
const kval = 1; // aの値は1であり、再代入不可(ほとんど定数と同じ扱い)

// 一方でオブジェクトの中身は変更可能(Dartでいうfinalに近い挙動)
const obj = { key: 1 };
obj.key = 2;
console.log(obj);