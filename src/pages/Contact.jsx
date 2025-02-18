import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 bg-gray-100 p-4 md:p-8 rounded-xl shadow-lg">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">Feel free to reach out to us for any inquiries or support. We are here to help you!</p>
            
            <div className="flex items-center gap-4 text-gray-700">
              <FaEnvelope className="text-blue-500 text-xl" />
              <span>contact@petadoption.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaPhone className="text-green-500 text-xl" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <span>123 Pet Street, Animal City</span>
            </div>
          </div>
  
          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
            <div className="flex gap-5 flex-col lg:flex-row">
            <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
             <div className="flex gap-5 flex-col lg:flex-row">
             <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
             </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border resize-none border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold  transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;