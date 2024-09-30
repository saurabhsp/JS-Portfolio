import React from "react"; // Import React to ensure JSX works

const ContactForm: React.FC = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
        Contact Me
      </h2>

      {/* Name with zoom-in effect */}
      <div className="mb-3 flex items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="/nameicon.png"
          alt="Name Logo"
          className="w-8 h-8" // Adjust size here
        />
        <strong className="text-white text-lg font-semibold">Saurabh Pakhale</strong>
      </div>

      {/* Email with zoom-in effect */}
      <div className="mb-3 flex items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="/emailicon.png"
          alt="Email Logo"
          className="w-7 h-7" // Adjust size here
        />
        <p className="text-white text-lg font-semibold">smpakhale36@gmail.com</p>
      </div>

      {/* Phone with zoom-in effect */}
      <div className="mb-3 flex items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="/contacticon.png"
          alt="Contact Logo"
          className="w-8 h-8" // Adjust size here
        />
        <p className="text-white text-lg font-semibold">+91-9767772373</p>
      </div>

      {/* Send Message Button */}
      <a
        href="https://wa.me/9767772373?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button" // Set button type to button to prevent form submission
          className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
        >
          Whatsapp Me
        </button>
      </a>
    </form>
  );
};

export default ContactForm;
