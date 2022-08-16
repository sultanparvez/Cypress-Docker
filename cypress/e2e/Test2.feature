// Cypress.Commands.add('login', (name, { cacheSession = false } = {}) => {
//     const loginMethod = () => {
//     cy.fixture('data').then(Data =>{
//       login.navigate('/');
//       login.enterUsername(name)
//       login.enterPassword(Data.password)
//       login.enterCilent(Data.client)
//       login.clickSubmit();
//       amt.timeout(1000)
//     })
//     }
//     if (cacheSession) {
//       cy.session(name , loginMethod)
//     } else {
//       loginMethod()
//     }
//   })