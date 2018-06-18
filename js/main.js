$(document).ready(function () {

    let lista_telefoniadiv = $('#lista_telefonia');
    let lista_computerdiv = $('#lista_computer');

    lista_telefonia.forEach(telefono => {
        let contenitore = $('<div></div>').addClass('col-md-4'); //div prodotto
        let row1 = $('<div></div>').addClass('row');  //immagine
        let row2 = $('<div></div>').addClass('row'); //nome
        let row3 = $('<div></div>').addClass('row'); //prezzo
        let row4 = $('<div></div>').addClass('row'); //button ordina

        let divimmagine = $('<div></div>').addClass('col-md-12 text-center');
        let image = $('<img></img>').addClass('img-fluid').attr('src', telefono.immmagine);
        
        let divnome = $('<div></div>').addClass('col-md-12');
        let nome = $('<h4></h4>').html(telefono.nome); 

        let divprezzo = $('<div></div>').addClass('col-md-12');
        let prezzo = $('<span></span>').html(telefono.prezzo + ' &euro;');

        let divbutton = $('<div></div>').addClass('col-md-12');
        let button = $('<button></button>').addClass('btn btn-success').html('Aggiungi al carello');

        image.appendTo(divimmagine);
        divimmagine.appendTo(row1);
        row1.appendTo(contenitore);

        nome.appendTo(divnome);
        divnome.appendTo(row2);
        row2.appendTo(contenitore);

        prezzo.appendTo(divprezzo);
        divprezzo.appendTo(row3);
        row3.appendTo(contenitore);

        button.appendTo(divbutton);
        divbutton.appendTo(row4);
        row4.appendTo(contenitore);

        contenitore.appendTo(lista_telefoniadiv);
    });
    
    lista_computer.forEach(computer => {
        let contenitore = $('<div></div>').addClass('col-md-4'); //div prodotto
        let row1 = $('<div></div>').addClass('row');  //immagine
        let row2 = $('<div></div>').addClass('row'); //nome
        let row3 = $('<div></div>').addClass('row'); //prezzo
        let row4 = $('<div></div>').addClass('row'); //button ordina

        let divimmagine = $('<div></div>').addClass('col-md-12 text-center');
        let image = $('<img></img>').addClass('img-fluid').attr('src', computer.immmagine);
        
        let divnome = $('<div></div>').addClass('col-md-12');
        let nome = $('<h4></h4>').html(computer.nome); 

        let divprezzo = $('<div></div>').addClass('col-md-12');
        let prezzo = $('<span></span>').html(computer.prezzo + ' &euro;');

        let divbutton = $('<div></div>').addClass('col-md-12');
        let button = $('<button></button>').addClass('btn btn-success').html('Aggiungi al carello');

        image.appendTo(divimmagine);
        divimmagine.appendTo(row1);
        row1.appendTo(contenitore);

        nome.appendTo(divnome);
        divnome.appendTo(row2);
        row2.appendTo(contenitore);

        prezzo.appendTo(divprezzo);
        divprezzo.appendTo(row3);
        row3.appendTo(contenitore);

        button.appendTo(divbutton);
        divbutton.appendTo(row4);
        row4.appendTo(contenitore);

        contenitore.appendTo(lista_computerdiv);
    });

});