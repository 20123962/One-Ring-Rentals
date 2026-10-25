import React from "react";

// IndexFeatured component
const IndexFeatured = ({Featured}) => (
    <div id="indexfeatured">
            <h1 className="section-title">Featured Properties</h1>

              <div className="grid-style1 clearfix">
                {/* displays each item from the array */}
                {Featured.map((featured) => (
                <div className="item col-md-4" key={featured.id}>
                  <div className="image">
                    <a href="properties-detail.html">
                      <h3>{featured.heading}</h3>
                      <span className="location">{featured.location}</span>
                    </a>
                    <img src={featured.imageUrl} alt={featured.heading} />
                  </div>
                  <div className="price">
                    <span>{featured.price}</span>
                    <p>per night</p>
                  </div>
                  <ul className="amenities">
                    <li><i className="icon-bedrooms"></i> {featured.bedroom}</li>
                    <li><i className="icon-bathrooms"></i> {featured.bathroom}</li>
                  </ul>
                </div>
                ))}
              </div>
    </div>
);

// exports the component so it can be imported
export default IndexFeatured;