let result ;

$( document ).ready(function() {
    result = '0';
    document.getElementById('result').innerHTML = result;
});

function addCharacter(character) {

    if( !!!result ){
        result = '0';
        console.log(result);
    }
    console.log(result);
    result += character;
    document.getElementById('result').innerHTML = result;
}


$("#calculate").click(function(){

    var final = result.substring(result.length -1 );

    if( isNaN( parseFloat(final))){
        return 0;
    }


    result = parseFloat(eval(result).toFixed(6));
    result = parseFloat(eval(result).toFixed(6));
    document.getElementById('result').innerHTML = result;

});

$(".actual").click(function(){

    if( result === '0' ){
        result = '';
    }

    result += this.value;
    document.getElementById('result').innerHTML = result;
    

});


$("#clear").click( function() {
    result = '0';
    document.getElementById('result').innerHTML = result;
});




$("#back").click(function(){

    if( result.length == 1 ){

        result = '0';

    }else{
        result = result.substring(0, result.length - 1);
    }

    //result = result.substring(0, result.length - 1);
    document.getElementById('result').innerHTML = result;

});
