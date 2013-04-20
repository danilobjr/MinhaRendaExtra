;
(function (e) {
    e(document).ready(function () {
        e("#submit-form").click(function (t) {
            t.preventDefault();
            var n = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var r = e("#rp_name").val(),
                i = e("#rp_email").val(),
                s = e("#assunto option:selected").val(),
                o = e("#rp_message").val(),
                u, a = e("#success"),
                loading = e('#loading');
            if (r == "") e("#rp_name").val("Por favor, preencha seu nome.");
            if (s == "") e("#rp_subject").val("Por favor, preencha seu nome.");
            if (i == "") {
                e("#rp_email").val("Por favor, Preencha seu Email.")
            } else if (n.test(i) == false) {
                e("#rp_email").val("Endereço de Email inválido.")
            }
            if (o == "") e("#rp_message").val("Por favor, digite a mensagem.");
            if (o != "" && r != "" && n.test(i) != false) {
                u = "nome=" + r + "&email=" + i + "&mensagem=" + o + "&assunto=" + s;
                console.log(u);
                e.ajax({
                    type: "POST",
                    url: "/contato/enviaremail",
                    data: u,
                    beforeSend: function () {
                        debugger;
                        loading.fadeIn();
                    },
                    complete: function () {
                        loading.fadeOut();
                    },
                    success: function (t) {
                        if (t.sucesso) {
                            a.html('<div class="alert alert-success"><strong>Mensagem enviada.</strong> Breve entraremos em contato.</div>');
                            e("#rp_name").val("");
                            e("#rp_email").val("");
                            e("#rp_message").val("")
                        } else {
                            a.html('<div class="alert alert-error">Desculpe. <strong>Não foi possível enviar sua mensagem agora</strong>. Por favor, tente mais tarde.</div>')
                        }
                    }
                })
            }
            return false;
        })
    })
})(jQuery);