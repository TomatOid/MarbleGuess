const form = document.getElementById('encrypt');
const error_box = document.getElementById('error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var entered_number = form.elements['guess'].value;
    if (entered_number < 0) {
        error_box.innerHTML = "really? you think there are <i>negative</i> marbles in the jar?"
    }
    else if (entered_number == 0) {
        error_box.innerHTML = "there are clearly <i>some</i> marbles in that jar.";
    }
    else if (entered_number >= 100000) {
        error_box.innerHTML = "come on, let's be reasonable here.";
    }
    else {
        error_box.innerHTML = "";
    }
});
