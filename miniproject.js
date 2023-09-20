function calbmi() {
    let weight = parseFloat(document.getElementById('weight').value)
    let height = parseFloat(document.getElementById('height').value)

    let m = height / 100
    let bmi = weight / (m * m)

    if (bmi < 19) {
        document.getElementById('message').innerHTML = "น้ำหนักน้อย";
        document.getElementById('message').style.color = "blue";
    } else if (bmi <= 22) {
        document.getElementById('message').innerHTML = "ปกติ ";
        document.getElementById('message').style.color = "green";
    } else if (bmi <= 24) {
        document.getElementById('message').innerHTML = "ท้วม";
        document.getElementById('message').style.color = "brown";
    } else if (bmi <= 29) {
        document.getElementById('message').innerHTML = "อ้วน";
        document.getElementById('message').style.color = "orange";
    }
     else if(bmi > 29) {
        document.getElementById('message').innerHTML = "อ้วนมาก";
        document.getElementById('message').style.color = "red";
    }
}
