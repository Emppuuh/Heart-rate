'use strict'

const button = document.querySelector('button');

const convert = () => {
    const age = document.querySelector('input').value;

    if (!age || age <= 0) {
        document.querySelector('output').innerHTML = 'Anna kelvollinen ikä!';
        return;
    }

    const maxHeartRate = 220 - age;
    const lowerLimit = maxHeartRate * 0.65;
    const upperLimit = maxHeartRate * 0.85;

    document.querySelector('output').innerHTML = `${lowerLimit.toFixed(2)} - ${upperLimit.toFixed(2)}`;
}

button.addEventListener('click', convert);