///<reference types="cypress"/>
describe('using DataDriven login',()=>{

    it('Orange hrm using DataDriven',()=>{
    
    cy.fixture('OrangeHrmLogin').then(  (data)=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

     data.forEach((Userdata)=>{

    cy.get("input[placeholder='Username']").type(Userdata.username)
    cy.get("input[placeholder='Password']").type(Userdata.password)
    cy.get("button[type='submit']").click()

     if(Userdata.username=='Admin' && Userdata.password == 'admin123')
     {
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected)
    cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').click()

    }
else
{
    cy.get("input[placeholder='Username']").type(Userdata.username)
    cy.get("input[placeholder='Password']").type(Userdata.password)
    cy.get("button[type='submit']").click()

}




     })
    
   });


 
   
    
    })
    })
