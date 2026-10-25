import React from "react";

// IndexPopularRegions component
const IndexPopularRegions = ({ Regions }) => (
    <div id="indexpopularregions">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="section-title">Popular Regions</h1>
                  <div id="regions">
                    {/* displays each item from the array */}
                    {Regions.map((region) => (
                    <div className="item col-md-2" key={region.id}>
                      <a href="#">
                        <img src={region.imageUrl} alt={region.region} />
                        <h3>{region.region}</h3>
                      </a>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
    </div>
);

// exports the component so it can be imported
export default IndexPopularRegions;