// Tips
// 変数はlet, constで宣言
// strictモードを使う

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

let x, y

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
