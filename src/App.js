import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as contactsAPI from '../src/utils/ContactsAPI';



class App extends Component {
    state = {
        contacts : [],
    };

    removeContacts = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }));
    };


    componentDidMount(){
        contactsAPI.getAll().then((contacts)=>{
            this.setState({ contacts })
        })
    }

    render() {
     return (
       <ListContacts onDeleteContact={this.removeContacts} contact={this.state.contacts}/>
     )
    }
}

export default App;