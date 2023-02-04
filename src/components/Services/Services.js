import React from "react";

const Services = () => {
  return (
    <div>
      <section id="services" className="section bg-grey">
        <div className="section-title">
          <h2>Services</h2>
          <div className="underline"></div>
        </div>

        <div className="services-center section-center">
          <article className="service">
            <i className="fas fa-code service-icon"></i>
            <h4>Développement Web</h4>
            <div className="underline"></div>
          </article>

          <article className="service">
            <i className="fab fa-sketch service-icon"></i>
            <h4>Développement Mobile</h4>
            <div className="underline"></div>
          </article>

          <article className="service">
            <i className="fab fa-android service-icon"></i>
            <h4>Référencement</h4>
            <div className="underline"></div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
