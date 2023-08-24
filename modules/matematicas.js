const Mathe = {};

const add = (a,b) => { 
    return a + b;
}

const substract = (a,b) => { 
    return a - b;
}

const multiply = (a,b) => { 
    return a * b;
}

const divide= (a,b) => { 
    if (b==0) {
        return "N/A"
    } else {
    return a / b;
    }
}

const getRandom =() => {
    return Math.floor(Math.random()* 10);
}

Mathe.add = add;
Mathe.substract = substract;
Mathe.multiply = multiply;
Mathe.divide = divide;
Mathe.getRandom = getRandom;


module.exports = Mathe;