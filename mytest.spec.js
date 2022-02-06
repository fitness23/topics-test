describe('Launch', () => {
	it('Open and click first item', () => {
		cy.visit('http://localhost:8080/')
		
		cy.get('.wordCloudList li:first()').click()
		
	})
})
