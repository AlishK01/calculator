let enter = document.getElementById('enter');
let buttons = document.querySelectorAll('button');
let enterValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        switch (buttonText) {
            case 'X':
                buttonText = '*';
                enterValue += buttonText;
                enter.value = enterValue;
                break;
            case 'C':
                enterValue = "";
                enter.value = enterValue;
                break;
            case '+':
                buttonText = '+';
                enterValue += buttonText;
                enter.value = enterValue;
                break;
            case 'Del':
                buttonText = 'Del';
                enterValue = enterValue.slice(0, -1);
                enter.value = enterValue;
                break;
            case '=':
                enter.value = eval(enterValue);
                break;

            default:
                enterValue += buttonText;
                enter.value = enterValue;

        }

    })
}