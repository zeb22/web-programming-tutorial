console.debug('loading agenda');


function getRow(person) {
    var firstname = person[2];
    var lastname = person[1];
    var position = person[0];
    var phone = person[3];
    var row = '<tr><td>' + position + '</td><td>' + lastname + '</td><td>' + firstname + '</td><td>' + phone + '</td></tr>';

    return row;
}

var contacts = [
    ['1.', 'Ionescu', 'Matei', '0747001'],
    ['2.', 'Vasilescu', 'Andrei', '0747001'],
    ['3.', 'Cotoara', 'Sebi', '0747061'],
    ['4.', 'Matei', 'Oana', '0747062']//,
    // ['Manu'],
    // ['Oana']
];

for (var i = 0; i < contacts.length; i++) {
    var person = contacts[i];
    $('#agenda tbody').append(getRow(person));
}