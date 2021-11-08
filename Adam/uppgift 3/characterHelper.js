

function charRemove ( input , character ) { 

    var inputArray = input.split('');
    console.log(inputArray);



    for ( var index = 0 ; index <= toString(input).length ;  index++ ) {

        input = input.replace(character, ""); 
    }
return input;
} 
console.log (charRemove);