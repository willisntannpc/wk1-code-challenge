function checkSpeed() {
    const speed = document.getElementById("speed").value;
    const result = document.getElementById("result");

    if (speed < 70) {
        result.innerText = "Ok";
    } else {
        const points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            result.innerText = "License suspended";
        } else {
            result.innerText = `Points: ${points}`;
        }
    }
}

