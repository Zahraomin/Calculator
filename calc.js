
        let array = [];
        let numbers = ["1","2","3","4","5","6","7","8","9","0","."];
        let joinedNumber = "";
        let arrangedArray = [];
        let calculation = undefined;
        let calculationString = "";
        let symbols = ["*","/","+","-"];
    

        const dotOccurences = (arr,value) =>{ let count = 0; for(let a=value; a<arr.length;a++){if(arr[a]==='.') count++; } return count;}

        function calc(x){

         
            let arraySymbol = array.filter(element => symbols.includes(element));
            let symbolIndex = (array.indexOf(arraySymbol.length>0?arraySymbol[0]:"@"));

            if((x=="." && array.indexOf(".")>-1 && !array.some(v => symbols.includes(v))) || (x=="." && dotOccurences(array,symbolIndex)>0 && array.some(v => symbols.includes(v)))){
                return
            }

            if(array == [] && symbols.includes(x)){
                return
            }
            

            if(array.some(v => symbols.includes(v)) && symbols.includes(x) && numbers.includes(array[array.length-1])){
                console.log("I cleared array 2");
                finalCalc();   
              arrangedArray = [];
                return

            }

            if(calculation!=undefined && array.length>0 && numbers.includes(x) && (numbers.includes(array[array.length-1]) || array[array.length-1].length>1)){
                calculation=undefined;
                array=[];
                array.push(x);
                document.getElementById("input").innerHTML  = array.join("");


            }
            else{
                if(symbols.includes(x) && array!=[] && symbols.includes(array[array.length-1])){
                   array.pop();
                }
                
           array.push(x)
            console.log(array);
            document.getElementById("input").innerHTML  = array.join("");
            arrangedArray = [];
            calculation=undefined;

            }

            console.log(numbers.indexOf(array[array.length-1])>-1);
            document.getElementById("equals").disabled = symbols.includes(array[array.length-1]); 
            
          }

          function finalCalc(){
              if(array.length==0){
                  return
              }

              for(let a=0; a<array.length;a++){

                  if(numbers.indexOf(array[a]) > -1 ||array[a].length>1){
                      joinedNumber+=array[a];
                      if(a==array.length-1){
                          arrangedArray.push(parseFloat(joinedNumber));
                          joinedNumber = "";
                      }   
                  }
                  else 
                  {
                      if(a>0 && !numbers.indexOf(array[a-1])>-1){
                          arrangedArray.pop();
                      }
                      if(joinedNumber!=""){
                          arrangedArray.push(parseFloat(joinedNumber));
                          joinedNumber="";

                      }
                      joinedNumber="";
                      arrangedArray.push(array[a]);
                  }
              }

              calculationString = arrangedArray.join("");
              console.log(calculationString);

              calculation = math.eval(calculationString).toFixed(4);
              document.getElementById("input").innerHTML  = calculation;
              console.log(calculation);

              array = [];
              array.push(calculation.toString());
              console.log(calculation.toString());
              arrangedArray = [];
              
              console.log(arrangedArray);
              console.log(calculation);
        }

        function clearAll(){
            console.log("clear");
            arrangedArray = [];
            array = [];
            document.getElementById("input").innerHTML  = "";
            calculation = undefined;

        }

        function deleteX(){
            array.pop();
            document.getElementById("input").innerHTML  = array.join("");
            arrangedArray = [];
            document.getElementById("equals").disabled = symbols.includes(array[array.length-1]); 
        }

        
