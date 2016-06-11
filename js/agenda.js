console.debug('loading agenda');


function getRow(person) {
    var firstname = person.firstname;
    var lastname = person.lastname;
    var position = person.position;
    var phone = person.phone;
    var row = '<tr><td>' + position + '</td><td>' + lastname + '</td><td>' + firstname + '</td><td>' + phone + '</td></tr>';

    return row;
}

var contacts = [
    {position: '1.', lastname: 'Ionescu', firstname: 'Matei', phone: '0747001'},
    {position: '2.', lastname: 'Vasilescu', firstname: 'Andrei', phone: '0747002'},
    {position: '3.', lastname: 'Cotoara', firstname: 'Sebi', phone: '0747061'},
    {position: '4.', lastname: 'Matei', firstname: 'Oana', phone: '0747062'},
    {position: '5.', lastname: 'Caruntu',firstname: 'Manu', phone: '0747065'}
]; //array cu JSON

for (var i = 0; i < contacts.length; i++) {
    var person = contacts[i];
    $('#agenda tbody').append(getRow(person));
}