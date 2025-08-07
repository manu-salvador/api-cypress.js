describe('GoRest API - Pruebas Funcionales', { tags: ['@gorest', '@funcional'] }, () => {
  
  // Variables globales para el contexto de las pruebas
  const environmentConfig = Cypress.env('environmentConfig');
  const baseUrl = environmentConfig?.baseUrl;
  const headers = environmentConfig?.headers;
  let userId;

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
        headers: headers,
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
        headers: headers,
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