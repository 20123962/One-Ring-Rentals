import React from "react";

// Footer component
const Footer = ({Regions, logo}) => (
    <footer id="footer">
        <div id="footer-top" className="container">
          <div className="row">
            <div className="block col-sm-3">
              <a href="#"
              // displays the current logo being shared with state
                ><img src={logo} alt="One Ring Rentals"
              /></a>
              <br /><br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
                volutpat quam dignissim, convallis elit id, efficitur sem.
                Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
                pellentesque nec at metus.
              </p>
            </div>
            <div className="block col-sm-3">
              <h3>Helpful Links</h3>
              <ul className="footer-links">
                <li><a href="#">All rentals</a></li>
                <li><a href="#">List your rental</a></li>
                <li><a href="#">Read our FAQs</a></li>
              </ul>
            </div>
            <div className="block col-sm-6">
              <h3>Popular regions</h3>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="footer-listings">

                    {/* Displays the first 3 regions */}
                    {Regions.slice(0,3).map((regions) => (
                    <li key={regions.id}>
                      <div className="image">
                        <a href="properties-detail.html"
                          ><img src={regions.imageUrl} alt={regions.region}
                        /></a>
                      </div>
                      <p><a href="properties-detail.html">{regions.region}</a></p>
                    </li>
                    ))}
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="footer-listings">
                    {/* Displays the second 3 regions */}
                    {Regions.slice(3,6).map((regions) => (
                    <li key={regions.id}>
                      <div className="image">
                        <a href="properties-detail.html"
                          ><img src={regions.imageUrl} alt={regions.region}
                        /></a>
                      </div>
                      <p><a href="properties-detail.html">{regions.region}</a></p>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                &copy; 2014 One Ring Rentals

                <ul className="social-networks">
                  <li>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-google"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-rss"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
);

// exports the component so it can be imported
export default Footer;