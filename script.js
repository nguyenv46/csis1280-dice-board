

const $ = (e) => document.querySelector(e);

function setDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    hh = today.getHours();
    MM = today.getMinutes();

    $('#day').textContent = dd + '/' + mm + '/' + yyyy + ' at ' + hh + ':' + MM;
}
setDate();
setInterval(() => {
    setDate();
}, 60000);

$('#btn').addEventListener('click', () => {
    let dices = document.querySelectorAll('.dice > img');
    let total = 0;
    for (let i = 0; i < dices.length; i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        dices[i].src = 'dice-' + dice + '.svg';
        total += dice;        
    }

    $('#total').textContent = total;

    if (total < 9) {
        $('#result').textContent = 'You didn\'t win: Try again!';
    } else {
        $('#result').textContent = 'You win: Try Again';
    }
})