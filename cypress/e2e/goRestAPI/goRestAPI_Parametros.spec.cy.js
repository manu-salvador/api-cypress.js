describe('GoRest API - Pruebas de Parametros', { tags: ['@gorest', '@parametros'] }, () => {
  
  // Variables globales para el contexto de las pruebas
  let baseUrl = 'https://gorest.co.in/public/v2';
  let authToken = 'Bearer 1342194d39a0f104bc26c2638f6ef57d5857daa8d6ae2a960bb77c2b812e80a3';

    const valoresInvalidos = [
        { descripcion: 'numero', valor: 123 },
        { descripcion: 'punto', valor: '.' },
        { descripcion: 'caracter especial', valor: '$' },
        { descripcion: 'guion', valor: '-' },
        { descripcion: 'null', valor: null }
    ]

    const camposParametroInvalidos = [
        { parametro: 'email' },
        { parametro: 'gender' },
        { parametro: 'status' }
    ]

    // Combinar campos con valores inválidos
    camposParametroInvalidos.forEach((campo) => {
        valoresInvalidos.forEach((valorInvalido) => {
            it(`campo ${campo.parametro} con ${valorInvalido.descripcion}`, { tags: ['@sad-path'] }, () => {
                const body = {
                    name: 'Test User',
                    email: `test${Date.now()}@example.com`,
                    gender: 'male',
                    status: 'active'
                };
                body[campo.parametro] = valorInvalido.valor;
                
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
                    cy.log(`Campo: ${campo.parametro}, Valor: ${valorInvalido.valor}, Descripción: ${valorInvalido.descripcion}`);
                    expect(response.status).to.eq(422);
                });
            });
        });
    });
    });