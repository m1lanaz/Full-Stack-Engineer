// When using async/ await you use try catch

function toppings_choice (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
        resolve( console.log("which topping would you love?") )
  
      },3000)
    })
  }

  async function kitchen(){

    console.log("A")
    console.log("B")
    console.log("C")
    
    await toppings_choice()
    
    console.log("D")
    console.log("E")
  
  }
  
  // Trigger the function
  
  kitchen();