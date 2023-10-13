import './style.css';

function About() {
    return (
        <div
        class="container-fluid d-flex flex-row flex-wrap justify-content-evenly align-items-center bg-dark text-light"
        id="about">
        <div class="">
          <h1 class="display-4">Hi! I'm</h1>
          <h1 class="display-4 text-nowrap">Janice Thomas</h1>
          <h3 class="display-6">A <u>pro</u>grammer</h3>
        </div>
        <div class="">
          <img src="profile.png" alt="about-pic"/>
        </div>
      </div >

    )
}

export default About;