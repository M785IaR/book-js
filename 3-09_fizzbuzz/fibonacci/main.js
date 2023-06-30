console.log('Fibonacci')


function Fibonacci (n){
    //n === 1のとき入力値nをそのまま返す
    if (n === 1){
        return n
    }else if (n > 1){
        return Fibonacci(n - 1) + Fibonacci(n - 2)
    }
}

//1より大きい（n >1）ときfibonacci(n-1)の時の数とfibonacci(n-2)の時の数を足したものを返す

let i = 0;
while(i < 11){
    console.log(Fibonacci(i))
    let i = i + 1;
    i++;
}
