//The selectors were mapped using CSS and Xpath, the propose is to show the both strategies.
const el = {
    contactUsLink: '#contact-link',
    contactUsInformationLink: 'a[title="Contact us"]',
    contactUsPage: '#center_column',
    subjectHeading: '#id_contact',
    webMasterMessage: '#desc_contact1',
    customerServiceMessage: '#desc_contact2',
    email: '#email',
    emailFormError: 'p[class="form-group form-error"]',
    orderReference: '#id_order',
    attachFile: '#fileUpload',
    message: '#message',
    send: '#submitMessage > span',
    errorMessage: '#center_column> div > ol > li',
    successMessage: '#center_column > p',
    backToHome: 'i[class="icon-chevron-left"]',
    homePageTabs: '#home-page-tabs',
    successMessageText: 'Your message has been successfully sent to our team.',
    webMasterMessageText: 'If a technical problem occurs on this website',
    customerServiceMessageText: 'For any question about a product, an order'
  }

  class ContactUs{

    clickContactUs(){
        cy.get(el.contactUsLink).click();  
        this.checkContactUsPage();
  
    }
    clickContactUsTroughInformation(){
        cy.get(el.contactUsInformationLink).click();  
    }
    checkContactUsPage(){
        cy.get(el.contactUsPage).should('be.visible')
    }
    selectSubjectHeading(chooseSubject){
        if(chooseSubject === 'Customer Service'){
            cy.get(el.subjectHeading).select(1);
        } else if (chooseSubject === 'Webmaster'){
            cy.get(el.subjectHeading).select(2);
        } else {
            cy.get(el.subjectHeading).select(0);
        }
    }
    checkSelectSubjectMessage(chooseSubject){
        if(chooseSubject === 'Customer Service'){
            cy.get(el.customerServiceMessage).invoke('text').should('include', el.customerServiceMessageText);
        } else{
            cy.get(el.webMasterMessage).invoke('text').should('include', el.webMasterMessageText);
        }
    }
    fillEmailAddress(email){
        cy.get(el.email).type(email);
    }
    fillOrderReference(orderReference){
        cy.get(el.orderReference).type(orderReference);
    }
    attachFile(file){
        cy.get(el.attachFile).attachFile(file);
    }
    fillMessage(message){
        cy.get(el.message).type(message);   
    }
    clickSend(){
        cy.get(el.send).click();   
  
    }
    checkErrorMessage(errorType){
        let errorMessageText
        switch(errorType){
            case 'email':
                errorMessageText = "Invalid email address.";  
            break;
            case 'order':
                errorMessageText = "Invalid order reference.";
            break;
            case 'blankEmail':
                errorMessageText = "The email cannot be blank.";
            break;
            case 'blankMessage':
                errorMessageText = "The message cannot be blank.";
            break;
            case 'noSubject':
                errorMessageText = "Please select a subject from the list provided.";
            break;
        }


        cy.get(el.errorMessage).invoke('text').should('include', errorMessageText);
  
    }
    checkSuccessMessage(){
        cy.get(el.successMessage).invoke('text').should('include', el.successMessageText);
  
    }
    checkEmailFormError(){
        cy.get(el.emailFormError).should('be.visible');
  
    }
    clickBackToHome(){
        cy.get(el.backToHome).click();  
  
    }


  }
  export default new ContactUs();