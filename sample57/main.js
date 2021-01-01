const arry = [1, 2, 3, 4, 5];
const todos = [
  {
    id: 1,
    title: "go to school",
    complete: true,
  },
  {
    id: 2,
    title: "go to museum",
    complete: true,
  },
  {
    id: 3,
    title: "go shopping",
    complete: false,
  },
]

// for(let i in arry) {
//   console.log("in", arry[i]);
// }
// for(let v of arry) {
//   console.log("of", v);
// }

for(let i = 0; i < todos.length; i ++) {
  if(todos[i].complete === true) {
    console.log("i", todos[i].title);
  }
}

for(let i in todos) {
  if(todos[i].complete === true) {
    console.log("i", todos[i].title);
  }
}

for(let v of todos) {
  if(v.complete === true) {
    console.log("v", v.title);
  }
}
