const el = {
    homePageTabs: '#home-page-tabs',
  }

  class HomePage{

    checkHomePage(){
        cy.get(el.homePageTabs).should('be.visible');
    }


  }
  export default new HomePage();