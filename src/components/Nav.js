import './style.css';

function Nav() {
    return (
        <nav class="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand ps-4" href="/#">MY PORTFOLIO</a>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav animate side-nav">
                    <li class="nav-item d-flex justify-content-evenly align-items-center">
                        <a class="nav-link" href="/#about" title="About Me"><i class="fas fa-cube"></i> About Me<i
                            class="fas fa-cube shortmenu animate"></i></a>
                        <span class="material-symbols-outlined">
                            face_3
                        </span>
                    </li>
                    <li class="nav-item d-flex justify-content-evenly align-items-center">
                        <a class="nav-link" href="/#skills" title="Skills"><i class="fas fa-cart-plus"></i> Overview <i
                            class="fas fa-cart-plus shortmenu animate"></i></a>
                            <span class="material-symbols-outlined">
                            star
                        </span>
                    </li>
                    <li class="nav-item d-flex justify-content-evenly align-items-center">
                        <a class="nav-link" href="/#contact" title="Contact Me"><i class="fas fa-comment"></i> Contact Me <i
                            class="fas fa-comment shortmenu animate"></i></a>
                            <span class="material-symbols-outlined">
                            call
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;