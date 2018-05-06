'use strict';
var taskFired = false;

function doladuj() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "json",
        success: function (data) {
            data.forEach(function (elem, index) {
                document.getElementById('json').innerHTML += "ID: " + data[index].id + "<br>";
                document.getElementById('json').innerHTML += "Imię i Nazwisko: " + data[index].name + "<br>";
                document.getElementById('json').innerHTML += "E-mail: " + data[index].email + "<br>";
                document.getElementById('json').innerHTML += "Telefon: " + data[index].phone + "<br>";
                document.getElementById('json').innerHTML += "Strona: " + data[index].website + "<br><hr>";
            });
        },
        onerror: function (msg) {
            console.log(msg);
        }
    });
    taskFired = false;
}
$(function () {
    doladuj()
    window.addEventListener('scroll', function () {
        var wysokosc = document.documentElement.offsetHeight;
        var odleglosc = document.documentElement.scrollTop + window.innerHeight;
        if (wysokosc == odleglosc - 50) {
            doladuj();
        };
    });
});