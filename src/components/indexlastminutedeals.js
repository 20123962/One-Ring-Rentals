import React from "react";

// IndexLastMinuteDeals component
const IndexLastMinuteDeals = ({LastMinuteDeals}) => (
    <div id="indexlastminutedeals">
                      <div className="col-sm-12">
                <h2 className="section-title">Last minute deals</h2>
                <ul className="latest-news">
                  {/* displays each item from the array */}
                  {LastMinuteDeals.map((lastminutedeals) => (
                  <li className="col-md-12" key={lastminutedeals.id}>
                    <div className="image">
                      <a href="blog-detail.html"></a>
                      <img alt={lastminutedeals.blog} src={lastminutedeals.imageUrl} />
                    </div>

                    <ul className="top-info">
                      <li><i className="fa fa-calendar"></i>{lastminutedeals.avaliable}</li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">{lastminutedeals.blog}</a>
                      <p>{lastminutedeals.paragraph}</p>
                    </h4>
                  </li>
                  ))}
                </ul>
                <p className="center">
                  <a className="btn btn-fullcolor" href="#">More deals</a>
                </p>
              </div>
    </div>
);

// exports the component so it can be imported
export default IndexLastMinuteDeals;