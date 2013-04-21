//########################################################################################################
//## VALIDAR
//########################################################################################################

function validarForm (form){
    if (form.checkValidity()) {
        if(confirm("IMPORTANTE:\n POR FAVOR, VERIFIQUE SE NOSSO E-MAIL FOI PARA SPAM OU NO LIXO ELETRÔNICO E CLASSIFIQUE-O COMO REMETENTE CONFIÁVEL PARA RECEBER MAIS INFORMAÇÕES EM SUA CAIXA DE ENTRADA")==true)
        { form.submit(); }
    }
};

function aviso()
{
	form = document.cadastrar;
    formContato = document.contato;

    if (form) {
        validarForm(form);
    }

    if (formContato) {
        validarForm(formContato);
    }    
};
//########################################################################################################

//########################################################################################################
//## VALIDAR
//########################################################################################################

(function ($) {
    $("body")
    .on('focusout', 'input[type=tel]', function () {
        var phone, element;
        element = $(this);
        element.unmask();
        /* removo tudo que não for numeros (\D) */
        phone = element.val().replace(/\D/g, '');
        if(phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    })
    .on('focus', 'input[type=tel]', function (e) {
        $(e.currentTarget).trigger('focusout');
    });

})(jQuery);
//########################################################################################################

//########################################################################################################
//###### FUNÇÃO TIRAR ESPAÇO
//########################################################################################################
String.prototype.trim = function()
{
	return this.replace(/^\s*/, "").replace(/\s*$/, "");
}
