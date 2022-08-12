const firstGame = () =>{
    let n = Number(prompt('Введите номер месяца'))
    if (n===12 || n ===1 || n === 2) {
        alert('Сейчас зима');
    } 
    else if( n===3 || n ===4 || n === 5) 
    {
        alert('Сейчас весна');
    }
    else if( n===6 || n ===7 || n === 8) 
    {
        alert('Сейчас лето');
    }
    else if( n===9 || n ===10 || n === 11) 
    {
        alert('Сейчас осень');
    }
    else{ alert('Такого месяца не существует');}
}

const secondGame = () =>{
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
    alert(arr.sort(() => Math.random() - 0.5));
    let firstWord = prompt('Чему равнялся первый элемент массива?');
    let lastWord = prompt('Чему равнялся последний элемент массива?');
    if (firstWord === arr[0] && lastWord === arr[arr.length-1]) {
        alert('Поздравляю! 2 из 2');
    } else if(firstWord === arr[0] || lastWord === arr[arr.length-1]){
        alert('Вы были близки к победе!');
    }
    else{
        alert('0 из 2, попробуйте ещё раз');
    }
}


const lastGame = () => {

    const puzzle = {
        ask: 'На раскрашенных страницах много праздников хранится.',
        answer: 'календарь',
        help: ['Подсказка 1: Помогает составлять планы', 'Подсказка 2: С помощью него можно посчитать количество дней в месяце'],
        askQuestion() {
            let userAnswer = prompt(this.ask);
            if(userAnswer.toLowerCase()===this.answer){
                alert('Правильно')
            }
            else{
                if (this.help.length) {
                    alert(`Неправильно, ${this.help.splice(0, 1)}`);
                    puzzle.askQuestion();
                } else {
                    alert('Вы проиграли')
                }
            }
        }
        
    }

    puzzle.askQuestion();
    
}

