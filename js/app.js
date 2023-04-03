let problemImg = document.querySelector("#problembox img");
// ************************** Problem-1 **************************
function problem1() {
  problemImg.src = "./img/problem-1.png";
  let arr = [2, 3, 5, 7, 8, 11, 10];
  let sortedArray = arr.sort((a, b) => a - b);

  console.log(sortedArray[0]);
}

// ************************** Problem-2 **************************

function problem2() {
  problemImg.src = "./img/problem-2.png";

  let arr = [2, 3, 5, 7, 8, 11, 10];
  let sortedArray = arr.sort((a, b) => b - a);
  console.log(sortedArray[0]);
}

// ************************** Problem-3 **************************

function problem3() {
  problemImg.src = "./img/problem-3.png";

  const arr = [1, 2, 3, 4, 5];

  let sum = arr.reduce((prev, curr) => prev + curr, 0);
  console.log(sum);
}

// ************************** Problem-4 **************************
function problem4() {
  problemImg.src = "./img/problem-4.png";

  const strings = ["hello", "world", "foo", "bar"];

  let newArray = strings.map((arrItem) => arrItem[0]);
  console.log(newArray);
}

// ************************** Problem-5 **************************
function problem5() {
  problemImg.src = "./img/problem-5.png";

  let arr = [1, 2, 3, 4, 5];
  let newArray = arr.filter((arrItem) => arrItem % 2 == 0);

  console.log(newArray);
}
// ************************** Problem-6 **************************
function problem6() {
  problemImg.src = "./img/problem-6.png";

  const strings = ["hello", "world", "foo", "bar"];

  let longestString = strings.sort((a, b) => b.length - a.length);
  console.log(longestString[0]);
}

// ************************** Problem-7 **************************
function problem7() {
  problemImg.src = "./img/problem-7.png";

  const arr = [1, 2, 3, 4, 5];

  let avg = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  console.log(avg);
}

// ************************** Problem-8 **************************
function problem8() {
  problemImg.src = "./img/problem-8.png";

  const strings = ["avijit", "hello", "world", "foo", "bar"];
  strings.sort();
  console.log(strings);
}

// ************************** Problem-9 **************************
function problem9() {
  problemImg.src = "./img/problem-9.png";

  const numbers = [1, 2, 3, 4, 2, 3];
  let newArray = [];

  //Method:1
  numbers.forEach((curr) => {
    if (!newArray.includes(curr)) {
      newArray.push(curr);
    }
  });

  // Method:2

  // let newArray = [...new Set(numbers)]

  console.log(newArray);
}

// ************************** Problem-10 **************************

function problem10() {
  problemImg.src = "./img/problem-10.png";

  const numbers = [2, 7, 11, 15];
  const targetValue = 9;

  let prev = 0;
  numbers.map((curr) => {
    if (prev + curr == targetValue) {
      console.log(`${prev},${curr}`);
    } else {
      prev = curr;
    }
  });
}

// ************************** Problem-11 **************************
function problem11() {
  problemImg.src = "./img/problem-11.png";

  const menuItems = [
    { name: "Burger", price: 5.99 },
    { name: "Fries", price: 2.99 },
    { name: "Soda", price: 1.99 },
    { name: "Pizza", price: 10.99 },
  ];
  menuItems.sort((a, b) => a.price - b.price);
  console.log(menuItems);
}

// ************************** Problem-12 **************************
function problem12() {
  problemImg.src = "./img/problem-12.png";
  const userPost = [
    "Just went for a #run #fitness",
    "Enjoying the #weekend #friends #run",
    "Can't wait for the #vacation #beach",
  ];

  let wordArray = [];
  userPost.map((curr) => wordArray.push(curr.split(" ")));

  let hashTagsSet = new Set();
  wordArray.flat().filter((curr) => {
    if (curr.startsWith("#")) {
      hashTagsSet.add(curr.slice(1));
    }
  });
  let uniqueHashTags = [...hashTagsSet];
  console.log(uniqueHashTags);
}

// ************************** Problem-13 **************************
function problem13() {
    problemImg.src = "./img/problem-13.png";
    const temperatures = [12, 25, 8, 19, 3];
    let formatedTemperatures = temperatures.map((curr) => {
        let fahrenheit = curr * 1.8 + 32;
        return `${curr}°C (${fahrenheit.toFixed(1)}°F)`
    })
    console.log(formatedTemperatures);
}

























// ************************** Problem-12 **************************
function problem11() {
  problemImg.src = "./img/problem-12.png";
}

// ************************** Problem-12 **************************
function problem11() {
  problemImg.src = "./img/problem-12.png";
}

// ************************** Problem-12 **************************
function problem11() {
  problemImg.src = "./img/problem-12.png";
}

// ************************** Problem-12 **************************
function problem11() {
  problemImg.src = "./img/problem-12.png";
}

// ************************** Problem-12 **************************
function problem11() {
  problemImg.src = "./img/problem-12.png";
}

// ************************** Problem-12 **************************
function problem11() {
  problemImg.src = "./img/problem-12.png";
}

// ************************** Problem-12 **************************
function problem11() {
  problemImg.src = "./img/problem-12.png";
}
