/*const sendBTn = document.querySelector("#send-msg");

const originalText = sendBTn.innerHTML;

const originalStyle = {
    backgroundColor: sendBTn.style.backgroundColor,
    color: sendBTn.style.color,
    border: sendBTn.style.border,
    boxShadow: sendBTn.style.boxShadow,
};*/

/*document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const phone = document.getElementById('phone').value;

    const subject = document.getElementById('email_subject').value;

    const message = document.getElementById('message').value;


    if (!name || !email || !phone || !subject || !message) {
        return alert("All Fields are Mandatory !");

    }

    emailjs.send("615280abc", "template_kpj6plm", {
        name: name,
        email: email,
        phone: phone,
        subject: email_subject,
        message: message,
    }).then(() => {
        alert('Message Sent !');

    }, (error) => {
        alert('Message error !');
        console.log('FAILED...', error);
    });
});
*/
const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-msg");

const originalText = sendBtn.innerHTML;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // prevent double click
    if (sendBtn.disabled) return;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("email_subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // validation
    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill all fields!");
        return;
    }

    // button loading
    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.send("615280abc", "template_kpj6plm", {
        name: name,
        email: email,
        phone: phone,
        email_subject: subject,
        message: message,
    })
    .then(() => {
        // success
        alert("Message Sent Successfully ✅");

        // reset form
        form.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Something went wrong ❌");
    })
    .finally(() => {
        // reset button
        sendBtn.innerHTML = originalText;
        sendBtn.disabled = false;
    });
});
