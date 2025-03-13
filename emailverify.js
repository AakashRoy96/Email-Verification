function sendOtp() {
    const email = document.getElementById('email');
    const otpverify = document.getElementByClassName('otpverify')[0];

    Email.send({
                Host: "smtp.gmail.com",
                Username: "sender@email_address.com",
                Password: "Enter your password",
                To: 'receiver@email_address.com',
                From: "sender@email_address.com",
                Subject: "Sending Email using javascript",
                Body: "Well that was easy!!"
    }).then(
      message => alert(message)
    );
}