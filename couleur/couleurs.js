
let div = document.getElementsByTagName('div');


console.log('list p ')

document.addEventListener('keypress',function (ev) {
    let touchPress = String.fromCharCode(ev.charCode).toUpperCase();
    console.log(touchPress);

    for (let i = 0; i < div.length; i++) {
        switch (touchPress) {
            case 'R':
                div[i].style.backgroundColor = 'red';
                break;
            case 'G':
                div[i].style.backgroundColor = 'green';
                break;
            case 'Y':
                div[i].style.backgroundColor = 'yellow';
                break;
            default :
                div[i].style.backgroundColor = 'white';
        }

    }
})