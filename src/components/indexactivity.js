import React from "react";

// IndexActivity component
const IndexActivity = ({Activity}) => (
    <div id="indexactivity">
              <div className="col-sm-12">
                <h2 className="section-title">Activity</h2>
                <ul className="activity">
                {/* displays each item from the array */}
                {Activity.map((activity) => (
                  <li className="col-lg-12" key={activity.id}>
                    <a href="#"
                      ><img src={activity.imageUrl} alt={activity.link}
                    /></a>
                    <div className="info">
                      <h5>
                        {activity.name}
                        <a href="#">{activity.link}</a>
                      </h5>
                      <p>
                        {activity.paragraph}
                      </p>
                      <h6>{activity.time}</h6>
                    </div>
                  </li>
                ))}
                </ul>
              </div>
    </div>
);

// exports the component so it can be imported
export default IndexActivity;