// This is synchronous

console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");

// This is asynchronous

console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},2000)

console.log("Ice Cream")