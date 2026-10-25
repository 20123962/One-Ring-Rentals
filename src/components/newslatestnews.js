import React from "react";

// ContentNews component
const ContentNews = ({News}) => (
    <div id="contentnews">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Latest News</h1>
              <div className="grid-style1 clearfix">
                {/* displays each item from the array */}
                {News.map((news) => (
                <div className="item col-md-4" key={news.id}>
                  <div className="image">
                    <a href="#">
                      <span className="btn btn-default"
                        ><i className="fa fa-file-o"></i> Read More</span
                      >
                    </a>
                    <img src={news.imageUrl} alt={news.title} />
                  </div>
                  <div className="tag"><i className="fa fa-file-text"></i></div>
                  <div className="info-blog">
                    <span className="title">{news.title}</span>
                    <span className="text"
                      >{news.paragraph}</span
                    >
                    <span className="meta">
                      <span className="author"
                        ><i className="fa fa-user"></i> Admin</span
                      >
                      <span className="date"
                        ><i className="fa fa-clock-o"></i> {news.date}</span
                      >
                    </span>
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
export default ContentNews;