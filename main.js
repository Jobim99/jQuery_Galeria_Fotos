$(document).ready(function() {
    $('header button').click(function() { 
        $('form').slideDown() /*QUANDO CLICA NO BOTAO MOSTRA O FORM */
    })
    
    $('#botao-cancelar').click(function() {
        $('form').slideUp() /*QUANDO CLICA NO BOTAO SOME O FORM */
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaImg = $('#img-nova').val()
        const novoItem = $('<li style="display: none;"></li>')
        $(`<img src="${novaImg}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-img-link">
                <a href="${novaImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#img-nova').val('')
    })



})