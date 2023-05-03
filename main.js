let result ;

$( document ).ready(function() {
    result = '0';
    document.getElementById('result').innerHTML = result;
});




$("#calculate").click(function(){

    var final = result.substring(result.length -1 );

    if( isNaN( parseFloat(final))){
        return 0;
    }

    result = parseFloat(eval(result).toFixed(6));
    result = result.toString() ;
    document.getElementById('result').innerHTML = result ;

});

$(".coma").click(function(){
    
    let myArray = result.split(/[-+*/]/);
    var ultimo = myArray[myArray.length -1 ];

    if( ultimo.includes('.') ){
        alert("No puede haber dos operadores decimales en el mismo número");
        return 0;
    }

    result += this.value;
    document.getElementById('result').innerHTML = result;
    
});



$(".operador").click(function(){
    

    var final = result.substring(result.length -1 );

    if( isNaN( parseFloat(final))){
        alert('No deben haber dos operadores contíguos');
        return 0;
    }

    result += this.value;
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

    
    document.getElementById('result').innerHTML = result;

});
