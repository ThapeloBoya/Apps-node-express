function display(val) {

    document.getElementById('result').value += val

    return val

}


function solve() {
    //storing all the values in x
    let x = document.getElementById('result').value
    //using eval to calculate the result and store the results in y
    let y = eval(x);
    //display the result
    document.getElementById('result').value = y

    return y

}

function clearScreen() {
    //returns an empty screen
    document.getElementById('result').value = ' '

}