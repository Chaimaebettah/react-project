import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };

    state = {
        query: '',
    };

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    };

    render(){
        const contacts = this.props.contact;
        return (
           <div className="list-contacts">
               <div className="list-contacts-top">
                   <input className="search-contacts" type="text" value={this.state.query} onChange={(event)=> this.updateQuery(event.target.value)}/>
               </div>
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
           </div>
       )
   }
}

export default ListContacts;