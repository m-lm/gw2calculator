const output = document.getElementById("calculated-output");

const materials = {
    "mithrillium": {"total": 50, "multiplier": 2},
    "thread": {"total": 100, "multiplier": 3},
    "cord": {"total": 50, "multiplier": 4},
    "residue": {"total": 50, "multiplier": 3}
};

function setDefault(input) {
    if (input.value.trim() === "") {
        input.value = 0;
    }
    main();
}

function compute(material, unref, ref) { 
    /* Function that takes in integers of raw mats and refined mats, 
    and calculates what is needed for ascended material. */
    let total = materials[material]["total"];
    let multiplier = materials[material]["multiplier"];
    if (ref <= 0) {
        leftover = 0;
        if (unref >= multiplier) {
            ref = Math.floor(unref/multiplier);
            leftover = unref % multiplier;
        }
        if (unref <  multiplier) {
            leftover = unref;
        }
    }
    else {
        ref = ref + (Math.floor(unref/multiplier));
        leftover = unref % multiplier;
    }
    const days = Math.floor(ref/total);
    const need = total - ref;
    const calculation = (need * multiplier - leftover);
    if (calculation > 0) {
        output.innerHTML = "Buy " + calculation + ` ${material}`;
    }
    else if (!isNaN(days)) {
        output.innerHTML = `You have enough to craft for ${days} ${days > 1 ? "days" : "day"}`;
    }
}

function main() {
    // Checks to see which radio button the user has pressed, and takes action accordingly.
    let unref = parseInt(document.getElementById("unrefined").value);
    let ref = parseInt(document.getElementById("refined").value);
    if (document.getElementById("mithril").checked) {
        compute("mithrillium", unref, ref);
    }
    else if (document.getElementById("silk").checked) {
        compute("thread", unref, ref);
    }
    else if (document.getElementById("leather").checked) {
        compute("cord", unref, ref);
    }
    else if (document.getElementById("wood").checked) {
        compute("residue", unref, ref);
    }
    else {
        output.innerHTML = "Please select a material";
    }
}