import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>About Us || Discount Pro</title>
      </Helmet>

      <div className="w-full max-w-6xl p-12 bg-white rounded-lg">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            About Discount Pro
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering smarter shopping with discounts and exclusive deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At **Discount Pro**, our mission is to make saving effortless. We
              strive to connect individuals and businesses through innovative
              solutions that streamline access to discounts and promotional
              offers, helping our users make informed purchasing decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to be the leading platform for discounts, known for
              reliability, ease of use, and innovation. Our vision is to
              revolutionize the way people discover and leverage savings in
              their everyday lives.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Seamless user experience with a modern, responsive design.
              </li>
              <li>Secure and efficient user authentication.</li>
              <li>Access to exclusive deals from trusted partners.</li>
              <li>Innovative features tailored to your shopping needs.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Have a question or feedback? Reach out to us at{" "}
              <a
                href="mailto:support@discountpro.com"
                className="text-primary font-medium hover:underline"
              >
                support@discountpro.com
              </a>
              . We’re here to help you make the most of your experience with
              **Discount Pro**.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Become a part of our mission to make saving smarter and simpler.
            Explore career opportunities or collaborate with us to create
            something extraordinary.
          </p>
          <a
            href="#"
            className="btn btn-primary px-6 py-2 text-lg font-medium rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
