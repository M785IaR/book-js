'use strict'

//object
let jsb = {

    // ↓ key   ↓ value
    // key: "value"

    title: 'JavaScript入門',
    price: 2500,
    obj:{
        text: "test",
        func: () => {
            console.log("this is callback function")
        }
    }
}

console.log(jsb)

//オブジェクトのkeyへのアクセス方法
//本のタイトルにアクセス

let bookTitle=jsb.title;
console.log(bookTitle)
console.log(jsb.price)

console.log(jsb.obj.text)
console.log(jsb.obj.func)

//オブジェクトの値を変える場合は？
jsb.price = 3000

console.log('オブジェクトの値を変える場合は？',jsb.price)

console.log(jsb['stock'])