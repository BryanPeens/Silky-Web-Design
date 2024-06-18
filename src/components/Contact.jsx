import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const InTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://getform.io/f/1785a9e0-97b5-419f-aac8-bce32400c34b", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
          setError(false);
          alert("Message sent successfully!");
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div id="contact" className="relative min-h-screen pt-16 bg-gray-100">
      {/* Contact Form Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Get in touch
              </h2>
              <p className="text-gray-600 font-semibold">
                Pop us an email - support@silky.com | Or give us a call
                +16132957781
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                minLength={10}
                maxLength={10}
              />
              <textarea
                placeholder="Your Message"
                className="bg-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="skeuomorphic-button-blue w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-900/100 text-white py-28 rounded-br-[140px] sm:rounded-br-[100px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold uppercase">
              Trusted by businesses across globe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-xl py-6 px-8 sm:py-3 text-center skeuomorphic-card-blue">
              <p className="text-6xl font-bold">100%</p>
              <p className="text-white mt-2">Completion</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl py-6 px-8 text-center skeuomorphic-card-blue">
              <p className="text-6xl font-bold">24/7</p>
              <p className="text-white mt-2">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InTouch;

const skeuomorphicButtonBlueCSS = `
  .skeuomorphic-button-blue {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #4A90E2, #0077B6, #1B98E0); /* Blueish gradient */
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    transition: transform 0.2s, background 0.3s;
    color: white;
  }
  .skeuomorphic-button-blue:hover {
    background: linear-gradient(to right, #0077B6, #1B98E0, #4A90E2); /* Adjusted hover gradient */
    transform: scale(1.05);
  }
  .skeuomorphic-button-blue:active {
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
  }
`;

// Inject CSS styles for the blue button
const styleSheetBlue = document.createElement("style");
styleSheetBlue.type = "text/css";
styleSheetBlue.innerText = skeuomorphicButtonBlueCSS;
document.head.appendChild(styleSheetBlue);


const skeuomorphicCard = `
  .skeuomorphic-card-blue {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #B3DFFC, #7BBDF5, #4A90E2); /* Lighter blueish gradient */
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    transition: transform 0.2s, background 0.3s;
    color: white;
  }
  .skeuomorphic-card-blue:hover {
    background: linear-gradient(to right, #7BBDF5, #4A90E2, #1B5A9A); /* Adjusted hover gradient */
    transform: scale(1.05);
  }
  .skeuomorphic-card-blue:active {
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
  }
`;

// Inject CSS styles for the blue card
const styleSheetCardBlue = document.createElement("style");
styleSheetCardBlue.type = "text/css";
styleSheetCardBlue.innerText = skeuomorphicCard;
document.head.appendChild(styleSheetCardBlue);
