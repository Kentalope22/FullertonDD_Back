const request = require('supertest'); // Importing Supertest
const app = require('../app'); // Import your Express app

describe('GET /api/products/list', () => {
  it('should return a list of products with a 200 status', async () => {
    const response = await request(app).get('/api/products/list'); // Send GET request to /products/list

    expect(response.status).toBe(200); // Assert that the response status is 200 OK
    expect(response.body).toBeInstanceOf(Array); // Assert that the response body is an array (product list)
    expect(response.body.length).toBeGreaterThan(0); // Assert that there are products in the list
    // Optionally, check if the response includes specific fields
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('name'); // Check that the first product has a 'name' field
    }
  });
});
