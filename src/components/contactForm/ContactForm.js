import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) =>setName(e.target.value)} required/>
      <input type="tel" value={phone} onChange={(e) =>setPhone(e.target.value)}
      pattern="^[0-9]\d{2}-\d{3}-\d{4}$" required/>
      <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} required/>
      <button type="submit">Submit</button>
    </form>
  );
};
