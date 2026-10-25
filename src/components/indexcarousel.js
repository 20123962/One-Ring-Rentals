import React from "react";

// IndexCarousel component
const IndexCarousel = ({Carousel}) => (
    <div id="indexcarousel">
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
		  <ol className="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		  </ol> 

        <div className="carousel-inner" role="listbox">
          {/* displays each item from the array */}
          {Carousel.map((carousel) => (
          <div key={carousel.id}
            className={carousel.class}
            id="slide1"
            style={{
              background: `url(${carousel.imageUrl}) no-repeat left center`,
              backgroundSize: "cover"
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">{carousel.title}</div>
              <div className="caption sfl slider-subtitle">
                {carousel.subtitle}
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg"
                >Learn More</a
              >
            </div>
          </div>
          ))}
        </div>
        <div id="home-search-section"></div>

        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
);

// exports the component so it can be imported
export default IndexCarousel;