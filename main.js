const form = document.getElementById('encrypt');
const error_box = document.getElementById('error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var entered_number = form.elements['guess'].value;
    if (entered_number < 0) {
        error_box.innerHTML = "really? you think there are <i>negative</i> marbles in the jar?"
        document.getElementById('output').style.display = "none";
    }
    else if (entered_number == 0) {
        error_box.innerHTML = "there are clearly <i>some</i> marbles in that jar.";
        document.getElementById('output').style.display = "none";
    }
    else if (entered_number >= 100000) {
        error_box.innerHTML = "come on, let's be reasonable here.";
        document.getElementById('output').style.display = "none";
    }
    else {
        error_box.innerHTML = "";
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(
            `-----BEGIN PUBLIC KEY-----
            MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdqbtYtwGTzmMU/nQxDgwxjMb1
            hdOSLX535Rb6EgPeOybPzmCTLfo+1wbMPzh1YeKHAn5ZQG8khZITYOSWaOywt8iX
            kD+WDDFpo3nRzsrt6suiXzmtF4sBCJzdtprHT7Svbi+b3v04ZlbY0NK23pzdaWm2
            ybmH3+0Spi4wJ5Vc4wIDAQAB
            -----END PUBLIC KEY-----`
        );
        // message gets padded in the encrypt function
        var ciphertext = "&%" + encrypt.encrypt(entered_number) + "%";
        document.getElementById('codebox').innerHTML = ciphertext;
        var clipboard = new ClipboardJS('.btn');
        document.getElementById('output').style.display = "block";
        window.scrollTo(0, document.body.scrollHeight);
    }
});
