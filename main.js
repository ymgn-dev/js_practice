// Tips
// 変数はlet, constで宣言
// strictモードを使う
'use strict'

// jsではプライベートを表すのに_を付けない方がいい
// また、変数の命名にはcamelCaseを使うのが好まれている

// 5つの大原則
// 1. 変数は、varではなく、letまたはconstで宣言せよ。
// 2. strictモードを使え
// 3. 型を理解し、自動的な型変換を避けよ。
// 4. プロトタイプを理解しよう。しかし、クラスとコンストラクタとメソッドには現在の構文を使おう。
// 5. thisは、コンストラクタまたはメソッドの中だけで使おう。

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
} catch (e) {
  console.log(e)
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

// デフォルト引数
const defaultAverage = (x, y = x) => (x + y) / 2

// rest(...)パラメータ(残余引数)と展開演算子

/// ...followingはfirst以外の引数の配列になる
const restAverage = (first = 0, ...following) => {
  let sum = first
  for (const value of following) {
    sum += value
  }
  return sum / (1 + following.length)
}

/// ...で配列の要素を展開できる
let mathMax = Math.max(...[1, 7, 2, 9])

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

// プロトタイプ(prototype、複数のオブジェクトに共通するプロパティの集合)
const employeePrototype = {
  raiseSalary: function (percent) {
    this.salary *= 1 + percent / 100
  },
}

function createEmployee(name, salary) {
  const result = { name, salary }
  // プロトタイプを設定
  Object.setPrototypeOf(result, employeePrototype)
  return result
}

// クラス構文
class SampleEmployee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

const harryInstance = new SampleEmployee('Harry Smith', 90000)

// ゲッターとセッター
class Person {
  constructor(last, first) {
    this.last = last
    this.first = first
  }
  get fullName() {
    return `${this.last}, ${this.first}`
  }
  set fullName(value) {
    const parts = value.split(/,\s*/)
    this.last = parts[0]
    this.first = parts[1]
  }
}

const harryPersonInstance = new Person('Smith', 'Harry')
console.log(harryPersonInstance.fullName)

// プライベートとstatic
class BankAccount {
  // #を付けるとプライベートになる
  #balance = 0
  deposit(amount) {
    this.#balance += amount
    console.log(this.#balance)
  }

  // staticなメソッド
  static #percentOf(amount, rate) {
    return (amount * rate) / 100
  }

  // staticなフィールド
  static OVERDRAFT_FEE = 30

  addInterest(rate) {
    // staticなメソッドはクラス名.メソッド名でアクセスする
    this.#balance += BankAccount.#percentOf(this.#balance, rate)
  }
}

const bankAccountInstance = new BankAccount()
bankAccountInstance.deposit(3)
bankAccountInstance.deposit(3)

// クラスとサブクラス
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary) // 親クラスのコンストラクタを必ず呼ぶ必要がある
    this.bonus = bonus // thisが使えるようになるのは親のコンストラクタを呼んでから
  }
  getSalary() {
    // 親のメソッドを呼ぶ時はsuper.メソッド名とする
    // super.raiseSalary()
    return this.salary + this.bonus
  }
}

// 数値リテラルにはアンダースコアを途中に記述できる
// 単に見やすくするためのものであって意味は持たない
console.log(123_456_789)

// 数値のフォーマット
const n = 3735928559
console.log(n.toString(16))
console.log(n.toString(8))

// NaNの判定
const nan = NaN // NaNは「数ではない」値
console.log(Number.isNaN(nan))
// Nan === Nanは必ずfalseになるため===ではチェックできない
console.log(nan === NaN)
// Number.isFinite(nan) // 有限の数
// Number.isInteger(nan) // 整数か
// Number.isSafeInteger(nan) // 丸めが発生しない安全な範囲に整数があるか
// Number.MAX_VALUE
// Number.MIN_VALUE

// Math
Math.max(1, 2)
Math.min(1, 2)
Math.round(2.5) // 3
Math.round(-2.5) // 2
Math.trunc(2.5) // 2
Math.abs(-3)
Math.sign(-3) // (符号)-1
Math.random() // 0 <= x < 1
// a以上b未満のdouble, intの乱数
// const randomInt = a + Math.trunc((b - a) * Math.random())
// const randomDouble = a + (b - a) * Math.random()

// ビッグ整数(任意の桁数を持たせられる整数)
8888888888888n // サフィックスにnを付ける
typeof 4444n // 'bigint'

// 日付(Date)
const epoch = new Date('1970-01-01T00:00:00.00Z')
