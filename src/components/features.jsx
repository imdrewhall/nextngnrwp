import React, { Component } from "react";
import Tilt from "react-tilt";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Nuestros Pilares</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                    {" "}
                    <div className="testimonial-image2">
                        {" "}
                        <Tilt className="Tilt" options={{ max : 10 }}  >
                      <div className="Tilt-inner"> <img src={d.img} alt="" /> </div>
                      </Tilt> 
                        {" "}
                      </div>
                    <h3>{d.title}</h3>
                    <p class="text-justify">{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
