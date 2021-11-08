

function charRemove ( input , character ) { 
   // var inputArray = input.split(' ');
   // console.log(inputArray);

    for ( var index = 0 ; index < 2 ;  index++ ) {
        input = input.replace(character, input); 
    }
return input;
} 

console.log (charRemove("ca",'c'));