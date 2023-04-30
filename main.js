let result = '';

function addCharacter(character) {
    result += character;
    document.getElementById('result').innerHTML = result;
}


$("#calculate").click(function(){

    var final = result.substring(result.length -1 );

    if( isNaN( parseInt(final))){
        return 0;
    }


    result = eval(result);
    document.getElementById('result').innerHTML = result;

});

$(".actual").click(function(){

    result += this.value;
    document.getElementById('result').innerHTML = result;
    

});


$("#clear").click( function() {
    result = '';
    document.getElementById('result').innerHTML = '';
});

$("#back").click(function(){

    result = result.substring(0, result.length - 1);
    document.getElementById('result').innerHTML = result;

});
