//########################################################################################################
//## VALIDAR
//########################################################################################################

(function ($) {

    $(function () {
        $('body').on('submit', 'form', function (e) {
            e.preventDefault();
            var form = $(e.currentTarget).get(0);

            if (form.checkValidity()) {
                if(confirm("IMPORTANTE\n\nPor favor, verifique se nosso e-mail foi para o SPAM ou lixo eletrônico do seu e-mail e classifique-o como remetente confiável para receber mais informações em sua caixa de entrada.")==true)
                { form.submit(); }
            }
        });
    });    

})(jQuery);

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
