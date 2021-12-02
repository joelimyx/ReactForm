import React from "react";

export const ContactPicker = ({contacts, onPick}) => {
  return (
    <select onChange={onPick}>
      <option> Please select a contact </option>
      {contacts.map(contact =>
        <option value={contact.name}>{contact.name}</option>
      )}
    </select>
  );
};
