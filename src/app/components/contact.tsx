import { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const contact_icon = "/contact.svg";
const arrow_icon = "/solid_arrow.svg";

const INPUT_CONTAINER_STYLES = "w-full py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-md-blue";

const Contact = () => {
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "77297db7-3286-4150-b9bb-e00b5971a278");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000); // Hide message after 5 seconds
        }
    }

    return (
        <div className="p-8 bg-deep-blue md:px-28 md:py-12 flex justify-center">
          <div className="border w-full max-w-[800px] border-white rounded-2xl md:px-28 md:py-8 p-4">
            <div className="flex items-center md:items-start w-full md:mr-10 border border-white rounded-full px-4 py-1 mb-4">
              <Image src={contact_icon} height={35} width={35} alt="Contact icon" className="md:size-10 mr-2"/>
              <h1 className="text-white font-medium text-2xl md:text-4xl italic">CONTACT ME!</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full items-center space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className={INPUT_CONTAINER_STYLES}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className={INPUT_CONTAINER_STYLES}
                />
                <textarea
                    placeholder="Your Message"
                    name="message"
                    className="w-full p-4 rounded-2xl shadow-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-md-blue"
                />
                <button
                    type="submit"
                    className="w-4/5 max-w-[200px] p-2 border border-white font-bold text-white rounded-full flex justify-center items-center transition-transform duration-500 hover:scale-105"
                >
                  <p className="mr-2">Submit Form</p>
                  <Image src={arrow_icon} height={20} width={20} alt="Arrow" />
                </button>
            </form>
            <div className="flex space-x-4 mt-4 justify-center">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/hannagracec" className="transition-transform duration-500 hover:scale-105">
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/hanna-cho-bb407b255/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-500 hover:scale-105">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-white" />
              </a>
            </div>
            {success && (
              <div className="mt-4 p-4 bg-white font-bold text-deep-blue rounded-lg text-center">
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            )}
          </div>
        </div>
    );
}

export default Contact;
