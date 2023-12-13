$(()=>{
    //regra do botão suspenso
    $(window).scroll(function() {
        if ($('html,body').scrollTop() > 100) {
            $('#btnFlutuante').show();
        } else {
            $('#btnFlutuante').hide();
        }
    });
    $('#btnFlutuante').click(function(){
        $('html,body').animate(
            {scrollTop : 0},800);
    });
    //regras do btn inscrever-se
    $('#btn_mod').click(function(){
        $('#btn_mod').removeClass('btn btn-outline-info');
        $('#btn_mod').addClass('btn btn-warning');
        //carregando o modal dinamicamente
        $('#modalContent').load('http://127.0.0.1:5500/paginas/modal.html', function(){
            $('#mod').modal('show');
        });
        console.log('Botão clicado');
        $('#modalContent').on('hidden.bs.modal', function(){
            $('#btn_mod').removeClass('btn btn-warning');
            $('#btn_mod').addClass('btn btn-success');
        })
    });
    //botão formulario
    $('#btnformulario').click(function(){
        alert('Cadastro feito com sucesso!');
    });
    
})
//configurações da pagina post01.html
$(document).ready(function(){
    var data= new Date();
    var dia= data.getDate() + "/" + (data.getMonth()+1)+ "/"+data.getFullYear();
    console.log(dia);
    $('#econfdate').text(dia);
});

