module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/contact-us',
     handler: 'contact-us.getContactUs',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/contact-us',
      handler: 'contact-us.createContactUs',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/contact-us/:id',
      handler: 'contact-us.updateContactUs',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/contact-us/:id',
      handler: 'contact-us.deleteContactUs',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
