'use strict'

console.log("3-10 test")

let items = ["やること",
    "プログラミング言語を見る",
    "PCを買い替える",
    "スマートフォンを買い替える"
]

// console.log(todo[1]);

// todoをすべて出力するようなプログラム

items.forEach(
    (item) => {
    console.log(item)
});

//項目を追加する
items.push("スマートフォン")
console.log(items)
