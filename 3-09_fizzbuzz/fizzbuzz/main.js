console.log('test')

function FizzBuzz (num) {
    if((num % 3 === 0) && (num % 5 ===0)){
        return 'FizzBuzz!';
    }else if (num % 3 ===0){
        return 'Fizz!';
    }else if (num % 5 ===0){
        return 'Buzz!';
    }else {
        return num;
    }
}

let i = 1;
while(i <= 10000){
    console.log(FizzBuzz(i))
    i += 1;
}

//「+=」か、「++」どちらでもOK
