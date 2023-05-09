function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_uqax9cq";
  const templateID = "template_z1l1rge";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      console.log("Your message has been sent");
    })
    .catch((err) => console.log(err));

  event.preventDefault();
}