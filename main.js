var difference = 0;

/**
 * Calculates the amount of change due in dollars, quarters, dimes, nickels and pennies
 */
function calculate() {
    var due = document.getElementById('amount-due').value;
    var received = document.getElementById('amount-received').value;
    difference = Number(received - due).toFixed(2);

    reset();

    if (difference > 0) {
        updateCount(1, "dollars-output", "dollars-pic");
        difference = getDifference(1);
    } else { 
        hideDollarPic();
    }

    if (difference > 0) {
        this.updateCount(0.25, "quarters-output", "quarters-pic");
        difference = getDifference(0.25);
    } else { 
        hideQuarterPic(); 
    }

    if (difference > 0) {
        updateCount(0.10, "dimes-output", "dimes-pic");
        difference = getDifference(0.10);
    } else { 
        hideDimePic();
    }

    if (difference > 0) {
        updateCount(0.05, "nickels-output", "nickels-pic");
        difference = getDifference(0.05);
    } else { 
        hideNickelPic(); 
    }

    if (difference > 0) {
        updateCount(0.01, "pennies-output", "pennies-pic");
        difference = getDifference(0.01);
    } else { 
        hidePennyPic(); 
    }
}

/**
 * Reset all amount of change due to 0 
 */
function reset() {
    document.getElementById("dollars-output").innerHTML = 0;
    document.getElementById("quarters-output").innerHTML = 0;
    document.getElementById("dimes-output").innerHTML = 0;
    document.getElementById("nickels-output").innerHTML = 0;
    document.getElementById("pennies-output").innerHTML = 0;
    hidePics();
}

function hidePics() {
    hideDollarPic(); 
    hideQuarterPic(); 
    hideDimePic(); 
    hideNickelPic(); 
    hidePennyPic();
}

function hideDollarPic() { 
    document.getElementById("dollars-pic").style.visibility = "hidden"; 
} 

function hideQuarterPic() { 
    document.getElementById("quarters-pic").style.visibility = "hidden";
}

function hideDimePic() { 
    document.getElementById("dimes-pic").style.visibility = "hidden";
}

function hideNickelPic() { 
    document.getElementById("nickels-pic").style.visibility = "hidden"; 
} 

function hidePennyPic() { 
    document.getElementById("pennies-pic").style.visibility = "hidden";
}

/**
 * Caluclates and updates the amount in change due for a given currency type
 * @param {number} amount - The currency amount for given variable
 * @param {string} variable - the currency type
 */
function updateCount(amount, variable, id) {
    var num = Math.floor(difference / amount);
    if (num > 0) {
    document.getElementById(variable).innerHTML = "<span style=\"color:darkgreen\">" + num + "</span>";
    document.getElementById(id).style.visibility = "visible";
    } else { 
        document.getElementById(variable).innerHTML = num; 
        document.getElementById(id).style.visibility = "hidden";
    }
}

/**
 * Calculates new remaining difference
 * @param {number} amount - The currency amount for given currency type
 * @return {number} - remaining difference
 */
function getDifference(amount) {
    return Number(difference % amount).toFixed(2);
}