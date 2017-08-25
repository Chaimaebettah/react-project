import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

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

    clearQuery= (query) =>{
        this.setState({query :''})
    };

    render(){
        const contacts = this.props.contact;
        let showingContacts;
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query),'i');
            showingContacts = contacts.filter((c) => match.test(c.name))
        } else {
            showingContacts = contacts;
        }
        showingContacts.sort(sortBy('name'));
        return (
           <div className="list-contacts">
               <div className="list-contacts-top">
                   <input className="search-contacts" type="text" value={this.state.query} onChange={(event)=> this.updateQuery(event.target.value)}/>
               </div>
               {showingContacts !== contacts && (
                   <div className="showing-contacts">
                       <span>NowShowing {showingContacts.length} out of {contacts.length} total</span>
                       <button onClick={()=> this.clearQuery()}>Show all</button>
                   </div>
               )}
               <ol className="contact-list">
                   {showingContacts.map((contact) =>
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