/**
 * オブジェクトの分割代入
 */

// const myProfile = {
//   name: "山田",
//   age: 41
// };

// const { age, name } = myProfile;

// const message1 = `私の名前は${name}です。年齢は${age}歳です。`;

// console.log(message1);

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [3, 2, 1];
// const sumFunc = (n1, n2, n3) => console.log(n1 - n2 - n3);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...arr3] = arr2; //分割代入
// console.log(n1);
// console.log(n2);
// console.log(arr3);

//配列のコピーと結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4]; //同じオブジェクトを参照しない要素のコピー
console.log(arr6);
const arr7 = [...arr4, ...arr5]; //配列の結合
console.log(arr7);
