document.addEventListener("DOMContentLoaded", () => {

    let diceButtons = document.querySelectorAll('.button');

    diceButtons.forEach(button => {
        button.addEventListener('click', function() { // For event listeners use normal function instead of arrow function
        let sides = parseInt(this.id);
        let times = parseInt(document.querySelector('.roll-number').value);
        if (isNaN(times) || times < 1) {
            alert("Please enter a valid number of rolls.");
            return;
        }
        let results = rollDice(sides, times);
        document.querySelector('.results').textContent = results.join(', ');
        // document.querySelector('.dice').textContent = sides.join(', ');
        });
    });

    const rollDice = (sides, times) => {
        let result = [];
        for (let i = 0; i < times; i++) {
            result.push(Math.floor(Math.random() * sides) + 1);
        }
        return result;
    }
});

