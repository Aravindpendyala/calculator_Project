 let result=document.getElementById("inputext")

let calculate=(number)=>{

        result.value+=number
}


let Result=()=>{
      
    try{
        result.value=eval(result.value)
    }
    catch(err){
             alert("Enter the valid input")
    }
}

  

function del(){
       result.value=result.value.slice(0,-1)
}

function clearr(){
    result.value=" ";
}