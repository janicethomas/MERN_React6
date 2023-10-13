import './style.css';

function Skills() {
    return(
        <section class="container-fluid" id="skills">
        <div class="flex flex-row py-5">
          <h1 class="text-center display-4 pt-5">Overview</h1>
        </div>
        <div class="d-flex flex-row justify-content-evenly align-items-center flex-wrap py-4">
          <div class="card align-items-center skills-card">
            <div>
              <span class="material-symbols-outlined icon">
                code
              </span>
            </div>
            
            <div class="card-body text-center">
              <h3>Competitive</h3>
              <h3>Coding</h3>
              <p class="card-text">Python, Java, C/C++</p>
            </div>
          </div>
          <div class="card align-items-center skills-card">
            <span class="material-symbols-outlined icon">
              empty_dashboard
            </span>
            <div class="card-body text-center">
              <h3>UI/UX </h3>
              <h3>Development</h3>
              <p class="card-text">HTML, CSS, Bootstrap</p>
            </div>
          </div>
          <div class="card align-items-center skills-card">
            <span class="material-symbols-outlined icon">
              smartphone
            </span>
            <div class="card-body text-center">
              <h3>App</h3>
              <h3>Development</h3>
              <p class="card-text">Flutter, Firebase</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Skills;