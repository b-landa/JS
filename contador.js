/* Contador regressivo de caracteres*/

var limite = document.getElementById("observ").maxLength="200"; 
/*O número que é do parâmetro maxLength, tem como função determinar o número máximo de caracteres permitido*/

var input = $('textarea#observ');
$('span#character-count').text(input.val().maxlength);

input.bind('keyup', function() {
    $('span#character-count').text(limite - input.val().length);
});