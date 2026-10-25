import React from "react";

// IndexRecentArticles component
const IndexRecentArticles = ({RecentArticles}) => (
    <div id="indexrecentarticles">
              <h1 className="section-title">Recent Articles</h1>
              <div className="grid-style1">
              {/* displays each item from the array */}
              {RecentArticles.map((recentarticles) => (
                <div className="item col-md-4" key={recentarticles.id}>
                  <div className="image">
                    <a href="#">
                      <span className="btn btn-default"
                        ><i className="fa fa-file-o"></i> Read More</span
                      >
                    </a>
                    <img src={recentarticles.imageUrl} alt={recentarticles.heading} />
                  </div>
                  <div className="tag"><i className="fa fa-file-text"></i></div>
                  <div className="info-blog">
                    <ul className="top-info">
                      <li><i className="fa fa-calendar"></i> {recentarticles.data}</li>
                      <li><i className="fa fa-comments-o"></i> {recentarticles.comment}</li>
                      <li>
                        <i className="fa fa-tags"></i> {recentarticles.tag}
                      </li>
                    </ul>
                    <h3>
                      <a href="#"
                        >{recentarticles.heading}</a
                      >
                    </h3>
                    <p>
                      {recentarticles.paragraph}
                    </p>
                  </div>
                </div>
                ))}
              </div>

              <div className="center">
                <a href="#" className="btn btn-default-color">View All News</a>
              </div>
            </div>
        
);

// exports the component so it can be imported
export default IndexRecentArticles;