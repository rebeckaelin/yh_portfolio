import { useState } from "react";

//component not in use

const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg font-second tracking-wider text-sm font-extralight"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full sm:w-1/2 ">
              <label className="block mb-1">first name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border "
                disabled={isDisabled}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2 pb-5 ">
              <label className="block mb-1">last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border"
                disabled={isDisabled}
              />
            </div>
          </div>

          <label className="block mb-2">subject</label>
          <input
            type="text"
            name="subject"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border"
            disabled={isDisabled}
          />

          <label className="block mb-2">email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border"
            disabled={isDisabled}
          />

          <label className="block mb-2">message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="10"
            className="w-full p-2 mb-4 border"
            disabled={isDisabled}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isDisabled}
              className={`py-2 px-4 ${
                isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-accent"
              }`}
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
