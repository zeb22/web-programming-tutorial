console.debug('loading agenda');


function getRow(person) {

    var row = '<tr>' +
        '<td>' + person.position + '</td>'+
        '<td>' + person.lastname + '</td>'+
        '<td>' + person.firstname + '</td>'+'' +
        '<td>' + person.phone + '</td>'+
        '<td><button>x</button></td>'+
        '</tr>';

    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json"
}).done(function(contacts) {
    console.debug("ajax done", contacts);
    showContacts(contacts);
});

console.debug('after ajax');

function showContacts(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        var person = contacts[i];
        $('#agenda tbody').append(getRow(person));
    }

}

