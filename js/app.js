// ************************** Problem-1 **************************
function problem1() {
    let arr = [2, 3, 5, 7, 8, 11, 10];
    let sortedArray = arr.sort((a,b)=>a-b)

    console.log(sortedArray[0])
}

// problem1();


// ************************** Problem-2 **************************

function problem2() {
    let arr = [2, 3, 5, 7, 8, 11, 10];
    let sortedArray = arr.sort((a,b)=>b-a)
    console.log(sortedArray[0])
}

// problem2();

// ************************** Problem-3 **************************

function problem3() {
    const arr = [1, 2, 3, 4, 5];

    let sum = arr.reduce((prev, curr) => prev + curr, 0);
    console.log(sum)
}
// problem3();

// ************************** Problem-4 **************************
function problem4() {
    const strings = ['hello', 'world', 'foo', 'bar'];

    let newArray = strings.map((arrItem)=>arrItem[0])
    console.log(newArray);
}
// problem4();

// ************************** Problem-5 **************************
function problem5() {
    let arr = [1, 2, 3, 4, 5];
    let newArray = arr.filter((arrItem)=>arrItem%2 == 0)

    console.log(newArray);
}
// problem5()
// ************************** Problem-6 **************************
function problem6() {
    const strings = ['hello', 'world', 'foo', 'bar'];

    let longestString = strings.sort((a, b) => b.length-a.length)
    console.log(longestString[0])
}
// problem6();


// ************************** Problem-7 **************************
function problem7() {
    const arr = [1, 2, 3, 4, 5];

    let avg = arr.reduce((prev, curr) => prev + curr, 0)/arr.length;
    console.log(avg)
}
// problem7();

// ************************** Problem-8 **************************
function problem8() {
    const strings = ['avijit', 'hello', 'world', 'foo', 'bar'];
    strings.sort();
    console.log(strings);
}
// problem8();

// ************************** Problem-9 **************************
function problem9() {
    const numbers = [1, 2, 3, 4, 2, 3];
    let newArray = []

    //Method:1
    numbers.forEach((curr) => {
        if (!newArray.includes(curr)) {
            newArray.push(curr);
        }
    })

    // Method:2

    // let newArray = [...new Set(numbers)]

    console.log(newArray)


}
// problem9();

// ************************** Problem-10 **************************

function problem10() {
    const numbers = [2, 7, 11, 15];
    const targetValue = 9;

    let prev = 0;
    numbers.map((curr) => {
        if (prev + curr == targetValue) {
            console.log(`${prev},${curr}`);
        } else {
            prev = curr;
        }
    })
}
// problem10();

// ************************** Problem-11 **************************
function problem11() {
    const menuItems = [
        { name:'Burger', price:5.99},
        { name:'Fries', price:2.99},
        { name:'Soda', price:1.99},
        { name:'Pizza', price:10.99},
    ]
    menuItems.sort((a, b) => a.price - b.price);
    console.log(menuItems);
}
// problem11();
