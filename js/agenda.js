console.debug('loading agenda');


function getRow(person) {

    var row = '<tr>' +
        '<td>' + person.position + '</td>'+
        '<td>' + person.lastname + '</td>'+
        '<td>' + person.firstname + '</td>'+'' +
        '<td>' + person.phone + '</td>'+
        '<td><button data-id="'+ person.id +'">REMOVE</button></td>'+
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
        var persoana = contacts[i];
        $('#agenda tbody').append(getRow(persoana));
    }
}

$('#agenda').on('click', 'button', function () {
    var id = $(this).data('id');
    console.info('remove this contact', this, id);
});

