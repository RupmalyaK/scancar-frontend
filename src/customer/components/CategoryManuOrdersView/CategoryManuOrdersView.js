import React, { Component } from "react";
// import './Category-Manu-Orders-View.scss';
import "./Images-Grid.css";
import cookie from "js-cookie";
import {connect} from "react-redux"
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

export class CategoryManuOrdersView extends Component {
  selectCategory = (e) => {
    const selection = e.target.getElementsByTagName("H2")[0].innerHTML;
    cookie.set("category", selection);
    window.location.href = `/${this.props.params.id}/custom-order`;
  };
  render = () => {
    return (
      <div className="main-container">
        <div className="manu-title">
          {/* <h1 style={{ color: "#071a52" }}>Your Menu</h1> */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce719d4c-aa70-4c06-9e47-12ab4896e9ff/d6oy7kh-9daf57df-b114-4b2f-bd9e-abbb6ed67b4f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2U3MTlkNGMtYWE3MC00YzA2LTllNDctMTJhYjQ4OTZlOWZmXC9kNm95N2toLTlkYWY1N2RmLWIxMTQtNGIyZi1iZDllLWFiYmI2ZWQ2N2I0Zi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.SPzghuFe8L20K4OzDJmPTJQbufH5aVKpOrzfbMeYp-k"
                  class="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://gmbmarketing.net/wp-content/uploads/2017/10/restaurant-banner-1.png"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/39495f68050781.5b4f5c571f0ea.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="second-container">
          <div id="c-grid" className="grid-container">
            <div
              className="location-image bg1"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>BURGER</h2>
              <div
                classn="ui star rating"
                data-rating="3"
                style={{ color: "#fff" }}
              ></div>
            </div>
            <div
              className="location-image bg2"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>SOUP</h2>
            </div>
            <div
              className="location-image bg3"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>SOFT DRINK</h2>
            </div>
            <div
              className="location-image bg4"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>BEER</h2>
            </div>
            <div
              className="location-image bg5"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>PIZZA</h2>
            </div>
            <div
              className="location-image bg6"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>DONUT</h2>
            </div>
            <div
              className="location-image bg7"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>SOUTH INDIAN</h2>
            </div>
            <div
              className="location-image bg8"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>NORTH INDIAN</h2>
            </div>
            <div
              className="location-image bg9"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>ITALIAN</h2>
            </div>
            <div
              className="location-image bg10"
              onClick={(e) => this.selectCategory(e)}
            >
              <h2>VEGETARIAN</h2>
            </div>
            <div>
        <ScrollUpButton
          ShowAtPosition={100}
          AnimationDuration={1500}
        />
      </div>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state , ownProps){
  console.log("state" , state)
  return{

  }
}

function mapDispatchToProps(dispatch) {
  return {
   dispatch
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryManuOrdersView);
