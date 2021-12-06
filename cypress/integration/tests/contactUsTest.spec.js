import contactUsPages from '../../support/pages/contactUsPages';
import homePages from '../../support/pages/homePages';
import contactData from '../../fixtures/contactData.json';
import { contactUsFlow } from '../../support/flows/contactUsFlows';
let email = contactData.email;
let orderReference = contactData.orderReference;
let message = contactData.message;
let subjectHeading = 'Customer Service';

describe('ContactUs', () => {
    
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })
    it('C2270 - ContactUs Complete Flow',() => {
       //Arrange
       contactData.orderReference = "order2";

       //Act
       contactUsPages.clickContactUs();
       contactUsPages.selectSubjectHeading(subjectHeading);
       contactUsPages.fillEmailAddress(contactData.email);
       contactUsPages.fillOrderReference(contactData.orderReference);
       contactUsPages.attachFile(contactData.filepath);
       contactUsPages.fillMessage(contactData.message);
       contactUsPages.clickSend();

       //Assert
       contactUsPages.checkSuccessMessage();

    });
    it('C2265 - Subject Heading - Customer Service Message',() => {
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
 
        //Assert
        contactUsPages.checkSelectSubjectMessage(subjectHeading);
 
     });
     it('C2266 - Subject Heading - Webmaster Message',() => {
        //Arrange
        subjectHeading = 'Webmaster';

        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
 
        //Assert
        contactUsPages.checkSelectSubjectMessage(subjectHeading);
 
     });
     it('C2267 - Email address - Invalid Format',() => {
        //Arrange
        subjectHeading = 'Webmaster';
        email = "email123test";
 
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
        contactUsPages.fillEmailAddress(email);
        contactUsPages.fillOrderReference(contactData.orderReference);
 
        //Assert
        contactUsPages.checkEmailFormError();
 
     });
     it('C2268 - Order Reference - Invalid Data',() => {
        //Arrange
        orderReference = "#%$*ˆ";
 
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
        contactUsPages.fillEmailAddress(contactData.email);
        contactUsPages.fillOrderReference(orderReference);
        contactUsPages.attachFile(contactData.filepath);
        contactUsPages.fillMessage(contactData.message);
        contactUsPages.clickSend();
 
        //Assert
        contactUsPages.checkErrorMessage('order');
 
     });
     it('C2269 - Send blank on the Email address',() => {
        //Arrange
        subjectHeading = 'Webmaster';
        email = " ";
 
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
        contactUsPages.fillEmailAddress(email);
        contactUsPages.fillOrderReference(contactData.orderReference);
        contactUsPages.attachFile(contactData.filepath);
        contactUsPages.fillMessage(contactData.message);
        contactUsPages.clickSend();
 
        //Assert
        contactUsPages.checkErrorMessage('blankEmail');
 
     });
     it('C2277 - Access Contact Us through the Information Menu',() => {
        //Act
        contactUsPages.clickContactUsTroughInformation();
 
        //Assert
        contactUsPages.checkContactUsPage();
 
     });
     it('C2278 - Email address - Invalid Format Send Form',() => {
        //Arrange
        subjectHeading = 'Webmaster';
        email = "email123test";
 
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
        contactUsPages.fillEmailAddress(email);
        contactUsPages.fillOrderReference(contactData.orderReference);
        contactUsPages.attachFile(contactData.filepath);
        contactUsPages.fillMessage(contactData.message);
        contactUsPages.clickSend();
 
        //Assert
        contactUsPages.checkErrorMessage('email');
 
     });
     it('C2279 - Send Message with Space and without Text',() => {
        //Arrange
        subjectHeading = 'Webmaster';
        message = " ";
 
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
        contactUsPages.fillEmailAddress(contactData.email);
        contactUsPages.fillOrderReference(contactData.orderReference);
        contactUsPages.attachFile(contactData.filepath);
        contactUsPages.fillMessage(message);
        contactUsPages.clickSend();
 
        //Assert
        contactUsPages.checkErrorMessage('blankMessage');
 
     });

     it('C2280 - No Send Message On Contact Form',() => {
        //Arrange
        subjectHeading = 'Webmaster';
        message = " ";
 
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
        contactUsPages.fillEmailAddress(contactData.email);
        contactUsPages.fillOrderReference(contactData.orderReference);
        contactUsPages.attachFile(contactData.filepath);
        contactUsPages.clickSend();
 
        //Assert
        contactUsPages.checkErrorMessage('blankMessage');
 
     });

     it('C2281 - Send Subject Heading - No select choose option',() => {
        //Arrange
        subjectHeading = 'noSubject';
 
        //Act
        contactUsPages.clickContactUs();
        contactUsPages.selectSubjectHeading(subjectHeading);
        contactUsPages.fillEmailAddress(contactData.email);
        contactUsPages.fillOrderReference(contactData.orderReference);
        contactUsPages.attachFile(contactData.filepath);
        contactUsPages.fillMessage(contactData.message);
        contactUsPages.clickSend();
 
        //Assert
        contactUsPages.checkErrorMessage('noSubject');
 
     });
     it('C2282 - Check Back To Home',() => {
       //Arrange
       subjectHeading = 'Webmaster';

       //Act
       //Using Flows
       contactUsFlow(subjectHeading);
       contactUsPages.clickBackToHome();
 
        //Assert
        homePages.checkHomePage();
 
     });

})    