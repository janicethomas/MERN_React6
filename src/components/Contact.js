import './style.css'

function Contact() {
    return(
        <section class="container-fluid d-flex flex-row flex-wrap justify-content-evenly align-items-center" id="contact">
        <div>
          <h1 class="text-center pb-5 display-4 pt-5">Contact Me</h1>
          <img src="contact.png" alt="contact-pic" />
        </div>
        <form id="contact_form" name="contact_form">
          <div class="my-5 row">
            <label>Name</label>
            <input type="text" required maxlength="50" class="form-control" />
          </div>
          <div class="mb-4 row">
            <label for="email_addr">Email address</label>
            <input type="email" required maxlength="50" class="form-control" placeholder="name@example.com" />
          </div>
          <div class="mb-4">
            <label for="message">Message</label>
            <textarea class="form-control" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn-primary px-4 btn-lg">Send mail</button>
        </form>
      </section>
    )
}

export default Contact;