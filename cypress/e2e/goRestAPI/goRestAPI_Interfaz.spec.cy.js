describe('GoRest API - Pruebas de Interfaz', { tags: ['@gorest', '@interfaz'] }, () => {
  
  // Variables globales para el contexto de las pruebas
  let baseUrl = 'https://gorest.co.in/public/v2';
  let authToken = 'Bearer 1342194d39a0f104bc26c2638f6ef57d5857daa8d6ae2a960bb77c2b812e80a3';
  let userId;

    it('Happy path - Crear un nuevo usuario con datos validos', { tags: ['@smoke'] }, () => {
      const userData = {
        name: 'Del Potro',
        email: `test${Date.now()}@example.com`,
        gender: 'male',
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

    const camposVacios = [
        { parametro: 'name', valor: '' },
        { parametro: 'email', valor: '' },
        { parametro: 'gender', valor: '' },
        { parametro: 'status', valor: '' }
    ]
    camposVacios.forEach((campo) => {
        it(`campo ${campo.parametro} vacio`, { tags: ['@sad-path'] }, () => {
            const body = {
                name: 'Test User',
                email: `test${Date.now()}@example.com`,
                gender: 'male',
                status: 'active'
            };
            body[campo.parametro] = campo.valor;
            cy.request({
                method: 'POST',
                url: `${baseUrl}/users`,
                headers: {
                    'Authorization': authToken,
                    'Content-Type': 'application/json'
                },
                body: body,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(JSON.stringify(response));
                expect(response.status).to.eq(422);
            });
        });
    });

    const camposSinEnviar = [
        { parametro: 'name' },
        { parametro: 'email' },
        { parametro: 'gender' },
        { parametro: 'status' }
    ]
    camposSinEnviar.forEach((campo) => {
        it(`campo ${campo.parametro} sin enviar`, { tags: ['@sad-path'] }, () => {
            const body = {
                name: 'Test User',
                email: `test${Date.now()}@example.com`,
                gender: 'male',
                status: 'active'
            };
            delete body[campo.parametro];
            cy.request({
                method: 'POST',
                url: `${baseUrl}/users`,
                headers: {
                    'Authorization': authToken,
                    'Content-Type': 'application/json'
                },
                body: body,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(JSON.stringify(response));
                expect(response.status).to.eq(422);
            });
        });
    });
    });