//problem 1 

const countToTen = () => {
    for(let i = 1; i < 11; i++) {
        console.log(i);
    }
}

//countToTen();

//problem 2 

const countFromOne = int => {
    for(let i = 1; i < int +1; i++) {
        console.log(i);
    }
}

//countFromOne(25)

//problem 3 

const countEveryEven = int => {
    for(let i = 1; i < int +1; i++) {
        if( i % 2 === 0 ) {
            console.log(i);
        }
    }
    
}

//countEveryEven(20); 

//problem 4 

const countEveryOdd = int => {
    for(let i = 1; i < int +1; i++) {
        if( i % 2 !== 0 ) {
            console.log(i);
        }
    }
    
}

//countEveryOdd(20);

//problem 5

const countEvens = array => {
    let evenNumberCounter = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNumberCounter += 1;
        }
    } console.log(evenNumberCounter);
} 

//countEvens([2, 3, 0, 5, 8, 12, 7]);

