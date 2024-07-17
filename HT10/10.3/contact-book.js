const contactBook = {
  contacts: [
    {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
    },
    {
      name: "Emily Johnson",
      phone: "555-123-4567",
      email: "emily.johnson@example.com",
    },
  ],

  searchByName: function (name) {
    return this.contacts.find(function (contact) {
      return contact.name === name;
    });
  },
  addContact: function (name, phone, email) {
    this.contacts.push({ name: name, phone: phone, email: email });
  },
};

const searchResult = contactBook.searchByName("Jane Smith");
console.log(searchResult);

contactBook.addContact('Michael Derp', '111-222-3333', 'michael.derp@example.com');
console.log(contactBook.contacts);