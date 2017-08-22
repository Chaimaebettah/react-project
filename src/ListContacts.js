import React, { Component } from 'react';

class ListContacts extends Component {
    render(){
        const contacts = this.props.contact;
        return (
           <ol className="contact-list">
               {contacts.map((contact) =>
                   <li className="contact-list-item" key={contact.id}>
                       <div className="contact-avatar" style={{ backgroundImage: `url(${contact.avatarURL})`}}/>
                       <div className="contact-details">
                           <p>{contact.name}</p>
                            <p>{contact.email}</p>
                       </div>
                       <button onClick={ () => this.props.onDeleteContact(contact)} className="contact-remove">Remove</button>
                   </li>
               )}
           </ol>
       )
   }
}

export default ListContacts;