describe('GoRest API - Pruebas Funcionales', { tags: ['@gorest', '@funcional'] }, () => {
  
  // Variables globales para el contexto de las pruebas
  let baseUrl = 'https://gorest.co.in/public/v2';
  let authToken = 'Bearer 1342194d39a0f104bc26c2638f6ef57d5857daa8d6ae2a960bb77c2b812e80a3';

    it('Crear usuario con gender female', () => {
      const userData = {
        name: 'Gisela Dulko',
        email: `test${Date.now()}@example.com`,
        gender: 'female',
        status: 'active'
      };

      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        headers: {
          'Authorization': authToken,
          'Content-Type': 'application/json'
        },
        body: userData
      }).then((response) => {
        cy.log(response);
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.eq(userData.name);
        expect(response.body.email).to.eq(userData.email);
        
        // Guardar el ID para pruebas posteriores
        userId = response.body.id;
        cy.log(`Usuario creado con ID: ${userId}`);
      });
    });

    it('Crear usuario con status inactive', () => {
      const userData = {
        name: 'David Nalbandian',
        email: `test${Date.now()}@example.com`,
        gender: 'female',
        status: 'inactive'
      };

      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        headers: {
          'Authorization': authToken,
          'Content-Type': 'application/json'
        },
        body: userData
      }).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.eq(userData.name);
        expect(response.body.email).to.eq(userData.email);
        
        // Guardar el ID para pruebas posteriores
        userId = response.body.id;
        cy.log(`Usuario creado con ID: ${userId}`);
      });
    });


    });