import 'cypress-file-upload';

describe('File upload',()=>{

it('fileupload-Single',()=>{

cy.visit('https://the-internet.herokuapp.com/upload')
cy.get('#file-upload').attachFile('shwetaBDesai.pdf')
cy.get('#file-submit').click()
cy.wait(5000)
cy.get("div[class='example'] h3").should('have.text','File Uploaded!')


})

it('fileupload rename',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile({filePath:'shwetaBDesai.pdf', fileName:'Myfile.pdf'})
    cy.get('#file-submit').click()
    cy.wait(5000)
    cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
})

it.only('fileupload rename',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').attachFile('shwetaBDesai.pdf',{subjectType:'drag-n-drop'})
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('shwetaBDesai')
    
    





})

})