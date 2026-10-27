import React from "react";

// Header component
const Header = ({logo, setLogo}) => {
    return (
        <div id="header">
			<div id="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">							
							<ul id="top-buttons">
								<li><a href="#"><i className="fa fa-sign-in"></i> Login</a></li>
								<li><a href="#"><i className="fa fa-pencil-square-o"></i> Register</a></li>
								<li className="divider"></li>
                
                {/* set the current logo to the old logo with shared state */}
                <li><button onClick={() => setLogo("./public/images/logo.oldpng.png")}>
                    Old Logo
                  </button></li>
                {/* set the current logo to the new logo with shared state */}
                <li><button onClick={() => setLogo("./public/images/logo.png")}>
                    New Logo
                  </button></li>
								<li>      
									<div className="language-switcher">
										<span><i className="fa fa-globe"></i> English</span>
										<ul>
											<li><a href="#">Deutsch</a></li>
											<li><a href="#">Espa&ntilde;ol</a></li>
											<li><a href="#">Fran&ccedil;ais</a></li>
											<li><a href="#">Portugu&ecirc;s</a></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <a href="index.html" className="nav-logo"
                // displays the current logo stored in shared state
                ><img src={logo} alt="One Ring Rentals"
                /></a>
                <div id="sb-search" className="sb-search">
                  <form>
                    <input
                      className="sb-search-input"
                      placeholder="Search..."
                      type="text"
                      defaultValue=""
                      name="search"
                      id="search"
                    />
                    <input className="sb-search-submit" type="submit" defaultValue="" />
                    <i className="fa fa-search sb-icon-search"></i>
                  </form>
                </div>
                <nav className="navbar">
                  <button id="nav-mobile-btn">
                    <i className="fa fa-bars"></i>
                  </button>

                  <ul className="nav navbar-nav">
                    <li><a href="index.html">Find a Rental</a></li>
                    <li><a href="regions.html">Regions</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="default.html">About</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
    )
};

// exports the component so it can be imported
export default Header;
