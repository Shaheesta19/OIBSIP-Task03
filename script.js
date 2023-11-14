function convertToFar(){
    //get the input value
    var inputCelsius=document.getElementById("inputCelsius").value;

    //check if input is a number
    if(!isNaN(inputCelsius)){
        //convert celcius to fahrenheit
        var result=(inputCelsius*9/5)+32;
      
    //display the result
    document.getElementById("result").innerHTML=inputCelsius + " Celsius is " + result.toFixed(2) + "Fahrenheit.";
    }else{
        //display an error message for invalid input 
        document.getElementById("result").innerHTML="Please enter a valid number!";
    }



    }
