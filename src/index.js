/**
 * オブジェクトの分割代入
 */

const myProfile = {
  name: "岩元",
  age: 51
};

const { age, name } = myProfile;

const message1 = `私の名前は${name}です。年齢は${age}歳です。`;

console.log(message1);
