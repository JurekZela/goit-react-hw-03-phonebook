import { Component } from 'react'
import { ContactForm } from './Phonebook/Phonebook';
import { Title, Card } from './Contacts/Contacts-styled';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  onAdd = (newContact) => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      return alert(`${newContact.name} is already in contacts.`);
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    });
  };

  searchContact = contact => {
this.setState({
  filter: contact,
})
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
    }))
  };
  
  render() {
      const { contacts, filter } = this.state;

      const visibleContacts = contacts.filter(contact => {
        return  contact.name.toLowerCase().includes(filter.toLocaleLowerCase());
      })

      return (
      <Card>
        <ContactForm onAdd={this.onAdd} />
        <Title>Contacts</Title>
        <Filter filter={filter} onSearchContact={this.searchContact} />
        <ContactList list={visibleContacts}  removeContact={this.removeContact} />
        </Card>
      )
    }
  };