console.debug('1) loading agenda');


function getRow(person) {

    var row = '<tr>' +
        '<td>' + person.position + '</td>'+
        '<td>' + person.lastname + '</td>'+
        '<td>' + person.firstname + '</td>'+'' +
        '<td>' + person.phone + '</td>'+
        '<td>'+
            '<button data-id="'+ person.id +'">EDIT</button>'+ ' ' +
            '<button data-id="'+ person.id +'">REMOVE</button>'+
        '</td>'+
        '</tr>';

    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json"
}).done(function(contacts) {
    console.debug("2) ajax done", contacts);
    showContacts(contacts);
});

function removeContact(id) {
    $.ajax({
    url: "js/mocks/remove-contact.json",
    //type: 'DELETE',
    type: 'POST',
    data: {
        id: id
    }
}).done(function(contacts) {
    showContacts(contacts);
});
}

console.debug('3) after ajax');

function showContacts(contacts) {
    $('#agenda tbody').html('');
    for (var i = 0; i < contacts.length; i++) {
        var persoana = contacts[i];
        $('#agenda tbody').append(getRow(persoana));
    }
}

$('#agenda').on('click', 'button', function () {
    var id = $(this).data('id');
    console.info('remove this contact', this, id);
    removeContact(id);
});

