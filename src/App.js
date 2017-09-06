import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContact from './CreateContacts';
import * as contactsAPI from '../src/utils/ContactsAPI';



class App extends Component {
    state = {
        contacts: []
    };

    removeContacts = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }));
        contactsAPI.remove(contact);
    };


    componentDidMount(){
        contactsAPI.getAll().then((contacts)=>{
            this.setState({ contacts })
        })
    }
    createContact(contact) {
        contactsAPI.create(contact).then(contact => {
            this.setState(state => ({
                contacts: state.contacts.concat([ contact ])
            }))
        })
    }

     )
    }
}

export default App;