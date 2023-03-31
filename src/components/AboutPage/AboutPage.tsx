import React from 'react';
import './AboutPage.scss';

function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <p className="about-container__title">About us!</p>
        <div className="about-container__description">
          <p>
            Welcome to our e-commerce electronic trade company, where we strive to provide the best
            online shopping experience for our customers.
          </p>
          <p>
            Our company is dedicated to offering a wide range of high-quality electronic products at
            competitive prices. We understand that electronic devices are a part of our daily lives,
            and we aim to make them accessible to everyone. Whether you&apos;re looking for the
            latest smartphone or a new laptop, we have you covered.
          </p>
          <p>
            We take pride in our commitment to customer satisfaction. Our team of experts is always
            ready to assist you with any questions or concerns you may have. We ensure that our
            customers receive their products in a timely and secure manner, and offer hassle-free
            returns if needed.
          </p>
          <p>
            At our e-commerce electronic trade company, we believe in creating a personalized
            shopping experience. We offer a user-friendly website with easy navigation and a variety
            of payment options to choose from. With our fast and reliable shipping, you can shop
            with confidence.
          </p>
          <p>
            Thank you for choosing us as your trusted online electronics retailer. We look forward
            to providing you with exceptional service and quality products for all your electronic
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
