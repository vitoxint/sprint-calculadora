let result = '0';
document.ready(function(){
    $('#result').innerHTML = '0';
})

function addCharacter(character) {
    if (result=='0') {
        result = character;
    } else {
        result += character;
    }
    document.getElementById('result').innerHTML = result;
}


$("#calculate").click(function(){

    var final = result.substring(result.length -1 );

    if( isNaN( parseInt(final))){
        return 0;
    }


    result = parseFloat(eval(result).toFixed(6));
    document.getElementById('result').innerHTML = result;

});

$(".actual").click(function(){

    result += this.value;
    document.getElementById('result').innerHTML = result;
    

});


$("#clear").click( function() {
    result = '0';
    document.getElementById('result').innerHTML = '0';
});

$("#back").click(function(){

    result = result.substring(0, result.length - 1);
    document.getElementById('result').innerHTML = result;

});
