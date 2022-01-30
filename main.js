// Tips
// 変数はlet, constで宣言
// strictモードを使う
'use strict'

// jsではプライベートを表すのに_を付けない方がいい
// また、変数の命名にはcamelCaseを使うのが好まれている

// プロジェクト内では一貫して、
// 意図して値を存在させない場合には、undefinedかnullを使うのが良い
// 参考: p.13 nullとundefined

// 変数宣言
let counter = 0

// 変数を宣言しundefinedにする
let x

// 値を変更しないならconstを使う
const PI = 3.14159265

// 複数同時の変数宣言(界隈から好まれていない)
const freezing = 0,
  boiling = 100

let z, y

// 文字列を数値に変換
const notQuitePi = parseFloat('3.14')
const evenLessPi = parseInt('3')

// 数値を文字列に変換
const notQuitePiString = notQuitePi.toString()
const evenLessPiString = (3).toString()

// インクリメント・デクリメント
counter += 10
counter++

// テンプレートリテラル
let dest = 'world'
let greeting = `Hello, ${dest.toUpperCase()}!`

// オブジェクト
const harry = { name: 'Harry Smith', age: 42 }
let harryAge = harry.age
// プロパティの書き換え
harry.age = 40
// プロパティの追加
harry.salary = 90000
// プロパティの削除
delete harry.salary
// 存在しないプロパティへアクセス
let boss = harry.supervisor // undefined
// []でプロパティへアクセス
let field = 'Age'
let harrysAge = harry[field.toLowerCase()]

// 配列(実はオブジェクトでプロパティ名が'0', '1', '2', ...なだけ)
const numbers = [1, 2, 3, 'many']

// json
let json = JSON.stringify(harry)
let parsed = JSON.parse(json)

// 分割
const pair = ['one', 'two']
// let first = pair[0]
// let second = pair[1]
// 上2行と同意
let [first, second] = pair

// 3種類のforループ

/// 古典的なforループ
for (let i = 1; i < 10; i++) {
  // hoge
}

/// for ofループ(イテラブルオブジェクトの要素を反復処理)
/// 最も一般的なイテラブルは配列と文字列
let arr = [, 2, , 4]
arr[9] = 100
for (const element of arr) {
  // undefined, 2, undefined, 4, undefined(5回), 100が出力される
  console.log(element)
}

// 文字列をfor ofで巡回するとUnicodeコードポイントを訪問する
// (🌏は2つのコードポイントを使ってgreetingString[6]と[7]に格納されるが
// そのことを意識する必要はない)
let greetingString = 'Hello 🌏'
for (const c of greetingString) {
  console.log(c)
}

/// for inループ
/// オブジェクトのキーを訪問する
let obj = { name: 'Harry Smith', age: 42 }
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`)
}

let missingNumbers = [1, 2, , 4]
missingNumbers[99] = 100
for (const i in missingNumbers) {
  console.log(`${i}: ${missingNumbers[i]}`)
}

// 例外処理
try {
  let parsed = parseInt('hoge')
  if (!parsed) {
    throw Error
  }
  console.log(parsed)
} catch {
  console.log('failed to parseInt.')
}

// 関数宣言
function average(x, y) {
  return (x + y) / 2
}
let result = average(6, 7)

// 関数は値の1つでもあるため、変数に格納することもできる
let f = average
let result2 = f(6, 7)

// 関数リテラル
let multiBy10 = [0, 1, 2, 4].map(function (x) {
  return x * 10
})

// アロー関数
// アロー関数はfunctionsキーワードを使うよりも正規な振る舞いをする(this参照)
// アロー関数を積極的に使うのが良い
const arrowAverage = (x, y) => (x + y) / 2
const arrowMultiBy10 = (x) => x * 10
const dieToss = () => Math.trunc(Math.random() * 6) + 1

// クロージャ
/// タイマーを設定するsetTimeout関数
let text = 'goodbye'
setTimeout(() => console.log(text), 1000)
text = 'hello'
