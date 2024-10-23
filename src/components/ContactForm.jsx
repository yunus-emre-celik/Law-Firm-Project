import React, { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formBilgileri:", formData);
    setFormData(initialValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 py-8  ">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          İsminiz
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-1/2 justify-self-center p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-postanız
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-1/2 justify-self-center p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Telefon Numaranız
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-1/2 justify-self-center p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Mesajınız
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-1/2 justify-self-center p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-1/6 justify-self-center bg-blue-600 text-white p-2 rounded"
      >
        Gönder
      </button>
    </form>
  );
};

export default ContactForm;
