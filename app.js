function mithrillium(unref, ref) {
    /* Function that takes in integers of raw mats and refined mats, 
    and calculates what is needed for mithril ascended mat. */
    var total = 50;
    var multiplier = 2;
    if (ref == 0) {
        var leftover = 0;
        if (unref >= multiplier) {
            var ref = Math.floor(unref/multiplier);
            var leftover = unref % multiplier;
        }
        if (unref <  multiplier) {
            var leftover = unref;
        }
    }
    else if (ref > 0) {
        var ref = ref + (Math.floor(unref/multiplier));
        var leftover = unref % multiplier;
    }
    var need = total - ref;
    var calculation = (need * multiplier - leftover);
    if (calculation > 0) {
        document.getElementById("calculated-output").innerHTML = "Buy " + calculation + " mithril ore";
    }
    else if (calculation <= 0) {
        if (Math.floor(ref/total) > 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " days";
        }
        else if (Math.floor(ref/total) == 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " day";
        }
    }
}

function thread(unref, ref) { 
    /* Function that takes in integers of raw mats and refined mats, 
    and calculates what is needed for silk thread ascended mat. */
    var total = 100;
    var multiplier = 3; 
    if (ref == 0) {
        var leftover = 0;
        if (unref >= multiplier) {
            var ref = Math.floor(unref/multiplier);
            var leftover = unref % multiplier;
        }
        if (unref <  multiplier) {
            var leftover = unref;
        }
    }
    else if (ref > 0) {
        var ref = ref + (Math.floor(unref/multiplier));
        var leftover = unref % multiplier;
    }
    var need = total - ref;
    var calculation = (need * multiplier - leftover);
    if (calculation > 0) {
        document.getElementById("calculated-output").innerHTML = "Buy " + calculation + " silk scraps";
    }
    else if (calculation <= 0) {
        if (Math.floor(ref/total) > 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " days";
        }
        else if (Math.floor(ref/total) == 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " day";
        }
    }
}

function cord(unref, ref) { 
    /* Function that takes in integers of raw mats and refined mats, 
    and calculates what is needed for elonian cord ascended mat. */
    var total = 50;
    var multiplier = 4;
    if (ref == 0) {
        var leftover = 0;
        if (unref >= multiplier) {
            var ref = Math.floor(unref/multiplier);
            var leftover = unref % multiplier;
        }
        if (unref <  multiplier) {
            var leftover = unref;
        }
    }
    else if (ref > 0) {
        var ref = ref + (Math.floor(unref/multiplier));
        var leftover = unref % multiplier;
    }
    var need = total - ref;
    var calculation = (need * multiplier - leftover);
    if (calculation > 0) {
        document.getElementById("calculated-output").innerHTML = "Buy " + calculation + " thick leather sections";
    }
    else if (calculation <= 0) {
        if (Math.floor(ref/total) > 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " days";
        }
        else if (Math.floor(ref/total) == 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " day";
        }
    }
}

function residue(unref, ref) { 
    /* Function that takes in integers of raw mats and refined mats, 
    and calculates what is needed for spirit residue ascended mat. */
    var total = 50;
    var multiplier = 3;
    if (ref == 0) {
        var leftover = 0;
        if (unref >= multiplier) {
            var ref = Math.floor(unref/multiplier);
            var leftover = unref % multiplier;
        }
        if (unref <  multiplier) {
            var leftover = unref;
        }
    }
    else if (ref > 0) {
        var ref = ref + (Math.floor(unref/multiplier));
        var leftover = unref % multiplier;
    }
    var need = total - ref;
    var calculation = (need * multiplier - leftover);
    if (calculation > 0) {
        document.getElementById("calculated-output").innerHTML = "Buy " + calculation + " elder wood logs";
    }
    else if (calculation <= 0) {
        if (Math.floor(ref/total) > 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " days";
        }
        else if (Math.floor(ref/total) == 1) {
            document.getElementById("calculated-output").innerHTML = "You have enough to craft for " + Math.floor(ref/total) + " day";
        }
    }
}

function mainfunc() {
    // Checks to see which radio button the user has pressed, and takes action accordingly.
    // If there is no numerical value in the input fields, automatically make them 0 so it doesn't glitch out.
    if (document.getElementById("unrefined").value == "") {
        document.getElementById("unrefined").value = "0";
    }
    if (document.getElementById("refined").value == "") {
        document.getElementById("refined").value = "0";
    }
    if (document.getElementById("mithril").checked == true) {
        mithrillium(parseInt(document.getElementById('unrefined').value), parseInt(document.getElementById('refined').value));
    }
    else if (document.getElementById("silk").checked == true) {
        thread(parseInt(document.getElementById('unrefined').value), parseInt(document.getElementById('refined').value));
    }
    else if (document.getElementById("leather").checked == true) {
        cord(parseInt(document.getElementById('unrefined').value), parseInt(document.getElementById('refined').value));
    }
    else if (document.getElementById("wood").checked == true) {
        residue(parseInt(document.getElementById('unrefined').value), parseInt(document.getElementById('refined').value));
    }
    else {
        document.getElementById("calculated-output").innerHTML = "Please select a material";
    }
}


