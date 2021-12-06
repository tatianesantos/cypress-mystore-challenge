//Create Flow is a good approach when we use the same flow in many scenarios 
//this reduce the code and make the code reusable and easy to maintainable
import contactUsPages from '../../support/pages/contactUsPages';
import contactData from '../../fixtures/contactData.json';

export async function contactUsFlow(subjectHeading){
    contactUsPages.clickContactUs();
    contactUsPages.selectSubjectHeading(subjectHeading);
    contactUsPages.fillEmailAddress(contactData.email);
    contactUsPages.fillOrderReference(contactData.orderReference);
    contactUsPages.attachFile(contactData.filepath);
    contactUsPages.fillMessage(contactData.message);
    contactUsPages.clickSend();
}