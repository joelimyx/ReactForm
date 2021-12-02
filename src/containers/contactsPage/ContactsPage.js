import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const contacts = props.contacts;
 const[dup, setDup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!dup){
     props.addContact(name, phone, email);
     setName('');
     setEmail('');
     setPhone('');
    }else{
      alert('Duplicate');
    }
  };
  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=>{
    setDup(contacts.find(contact => contact.name === name) !== undefined);
    
  },[name])
  
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} phone={phone} email={email}
        setName={setName} setPhone={setPhone} setEmail={setEmail}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
