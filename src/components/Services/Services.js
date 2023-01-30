import React from "react";

const Services = () => {
  return (
    <div>
      <section id="services" class="section bg-grey">
        <div class="section-title">
          <h2>Services</h2>
          <div class="underline"></div>
        </div>

        <div class="services-center section-center">
          <article class="service">
            <i class="fas fa-code service-icon"></i>
            <h4>Développement Web</h4>
            <div class="underline"></div>
          </article>

          <article class="service">
            <i class="fab fa-sketch service-icon"></i>
            <h4>Développement Mobile</h4>
            <div class="underline"></div>
          </article>

          <article class="service">
            <i class="fab fa-android service-icon"></i>
            <h4>Référencement</h4>
            <div class="underline"></div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
