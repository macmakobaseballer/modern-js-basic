/**
 * const、let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);
// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);
// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);
// let変数は上書き可能
val2 = "let変数は上書き可能";
console.log(val2);
// let変数は再宣言不可
// let val2 = "再宣言不可"

const val3 = "const変数";
console.log(val3);
// const変数は上書き不可
// val3 = "const変数は上書き不可";
// const変数は再宣言不可
// const val3 = "const変数は再宣言不可";

// constで定義したオブジェクトのプロパティは上書き可能
const val4 = {
  name: "じゃけぇ",
  age: 30
};
console.log(val4);
val4.name = "mako";
val4.country = "Japan";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name1 = "mako";
const age1 = 30;
//　私の名前はmakoです。年齢は30歳です。

//従来
const message1 = "私の名前は" + name1 + "です。年齢は" + age1 + "歳です。";
console.log(message1);

// テンプレート文字列を利用する場合
const message2 = `私の名前は${name1}です。年齢は${age1}歳です。`;
console.log(message2);

/**
 * アロー関数
 */
// 通常の関数定義
// function func1(str){
//   return str;
// }
// 変数で関数を定義することも可能
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }
// ブラケットの省略は可能
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */

//オブジェクトの場合
const myProfile = {
  name2: "mako",
  age2: 30
};

// 分割代入なし
const message3 = `名前は${myProfile.name2}です。年齢は${myProfile.age2}歳です。`;
console.log(message3);
// 分割代入あり
const { name2, age2 } = myProfile;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);

// 配列の場合
const fruits = ["apple", "orange"];
const [no1, no2] = fruits;
const message5 = `好きな果物No.1は${no1}、No.2は${no2}です。`;
console.log(message5);

/**
 * デフォルト値、引数など
 */
// デフォルト値を設定せず引数なしで呼び出し
const sayHello = (name3) => console.log(`こんにちは！${name3}さん`);
sayHello();

// デフォルト値を設定して引数なしで呼び出し
const sayHello2 = (name4 = "ゲスト") => console.log(`こんにちは！${name4}さん`);
sayHello2();

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 集約
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
const arr7 = [...arr4, ...arr5];
console.log(arr6);
console.log(arr7);

// 配列をそのまま代入すると参照渡しになるためNG
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// map
const nameArr = ["田中", "山田", "山口"];

// const nameArr2 = nameArr.map((name5)=>{
//   return name5;
// })
// console.log(nameArr2);

nameArr.map((name6) => console.log(name6));
nameArr.map((name7, index) => console.log(`${index + 1}番目は${name7}です`));

// filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "山口") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const numFlag = 1 > 0 ? "trueです" : "falseです";
console.log(numFlag);

const num3 = "1300";
console.log(num3.toLocaleString());

const formattedNum =
  typeof num3 === "number" ? num3.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num4, num5) => {
  return num4 + num5 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 80));
console.log(checkSum(50, 30));

/**
 * 論理演算子の本当の意味を知ろう
 */
// ||は「左側がfalseなら右側を返す」
const num6 = 100;
const fee = num6 || "金額未設定です";
console.log(fee);

// &&は「左側がtrueなら右側を返す」
const num7 = 100;
const fee2 = num7 && "何か設定されました";
console.log(fee2);
