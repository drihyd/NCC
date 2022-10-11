
const Header = ({ headerNav }) =>
`
    <header>
        <div class="container">
            <div class="row align-items-sm-center">
                <div class="col-sm-2 col-4 pl-sm-3 pl-0">
                    <a href="#"><img src="./img/header-logo.png" class="img-fluid"></a>
                </div>
                <div class="col-sm-10 col-8">

                    <div class="topbar">
                        <ul class="pl-0">
                            <!--<li class="mr-sm-4">Share Price at 05:00PM IST: <span class="text-large text-yellow">65.05</span> <span class="text-yellow">INR</span></li>-->
                            <li><a href="#"><i class="fas fa-envelope"></i></a></li>
                            <li><a href="#"><i class="fas fa-search"></i></a></li>
                        </ul>
                    </div>
                    <div class="menubar">
                        <nav class="navbar navbar-expand-lg pt-0 pb-0 pl-0 pr-0 justify-content-end">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            LEGACY <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Overview</a>
                                            <a class="dropdown-item" href="#">NCC Group</a>
                                            <a class="dropdown-item" href="#">Philosophy</a>
                                            <a class="dropdown-item" href="#">Management</a>
                                            <a class="dropdown-item" href="#">Presence</a>
                                            <a class="dropdown-item" href="#">Subsidiaries</a>

                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            EXPERTISE <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            COMMITMENT <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            SUBSIDIARIES <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                MILESTONES <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            NEWS <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            CAREERS <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            CONTACT <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
`;

const Footer = ({ footerNav }) =>
`
<footer>
        <div class="container">
            <div class="row footer-border-bottom">
                <div class="col-sm-4">
                    <div class="footer-website-info">
                        <img src="./img/footer-logo.png" class="img-fluid footer-logo mb-3">
                        <p>Committed to a brighter world...</p>
                        <p>Deligence can accomplish wonders!</p>
                        <p>For over four decades, we never sidetracked from this belief. and have leapfrogged from being just a construction industry player to a Billion dollar multifunctional infrastructure conglomerate.</p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="footer-card-wrapper">
                        <h4 class="heading">Contacts</h4>
                        <ul class="footer-contact-info">
                            <li><i class="fas fa-map-marker-alt"></i> NCC House, Madhapur Hyderabad - 500081 Telangana, India</li>
                            <li><i class="fas fa-phone-alt"></i> T: <a href="">+91 40 2326 8888</a><br>F: <a href="#">+91 40 2312 5555</a></li>
                            <li><i class="far fa-envelope"></i> <a href="#">ncc.ho@ncc.ltd.in</a></li>
                            <li><i class="fas fa-globe"></i> <a href="#">www.ncclimited.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="footer-card-wrapper">
                        <h4 class="heading">Company</h4>
                        <ul class="footer-menu-links">
                            <li><a href="#">Legacy</a></li>
                            <li><a href="#">Expertise</a></li>
                            <li><a href="#">Commitment</a></li>
                            <li><a href="#">Subsidiaries</a></li>
                            <li><a href="#">Milestones</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="footer-card-wrapper">
                        <h4 class="heading">Subscribe to Our News</h4>
                        <p class="text-white">Find out about the last days and the latest promotions of our Corporation</p>
                        <div class="subscribe-form-wrapper">
                            <form>
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" placeholder="Email">
                                    <div class="input-group-append">
                                        <span class="input-group-text btn btn-brand" id="basic-addon2">SUBSCRIBE</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pt-4 pb-4">
                <div class="col-sm-6">
                    <p class="text-white"><b>All rights reserved Copyrights 2022</b></p>
                </div>
                <div class="col-sm-6 text-sm-right">
                    <ul class="social-links">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>


        </div>
    </footer>
`;

// Header Script
$('#headerNav').html([
  { headerNav:'' }
].map(Header).join(''));

// Footer Script
$('#footerNav').html([
  { footerNav:'' }
].map(Footer).join(''));
