$(function () {
    'use strict';
    $('#count-sum').on('click', function () {
        var suma = 0
        $(".salary").each(function (index) {
            var wyplata = parseInt($(".salary").eq(index).text())
            suma += wyplata
        });
        $('#sum').text(suma)
    });
});