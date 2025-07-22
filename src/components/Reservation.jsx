import React, { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.guests || formData.guests <= 0) newErrors.guests = "At least 1 guest required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      {submitted ? (
        <div className="text-green-700 font-medium">Reservation submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {["name", "email", "date", "time", "guests"].map((field, idx) => (
            <div className="mb-4" key={idx}>
              <label htmlFor={field} className="block font-medium">
                {field === "guests" ? "Number of Guests" : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : field === "date" ? "date" : field === "time" ? "time" : field === "guests" ? "number" : "text"}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                aria-required="true"
                min={field === "guests" ? 1 : undefined}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Reservation;
