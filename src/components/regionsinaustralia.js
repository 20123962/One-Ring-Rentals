
import React from "react";

// RegionsInAustralia component
const RegionsInAustralia = ({ Regions }) => (
    <div id="regionsinaustralia">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="main col-sm-12">
                <h1 className="section-title">Regions in Australia</h1>
                <div className="grid-style1 clearfix">
                  {/* displays each item from the array */}
                  {Regions.map((region) => (
                  <div className="item col-md-4" key={region.id}>
                    <div className="image">
                      <a href="#">
                        <h3>{region.region}</h3>
                        <span className="location">{region.state}</span>
                      </a>
                      <img src={region.imageUrl} alt={region.region} />
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
);

// exports the component so it can be imported
export default RegionsInAustralia;
