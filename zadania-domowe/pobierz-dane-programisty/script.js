'use strict';
$(function () {
    $('#pobierz').on('click', function () {
        $('button').after('<div id="dane-programisty"></div>')
        $.getJSON(
            "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                $('#dane-programisty').append("Imię i nazwisko: " + data.imie + " " + data.nazwisko + "<br>Zawód: " + data.zawod + "<br> Firma: " + data.firma);
            });
    })
});