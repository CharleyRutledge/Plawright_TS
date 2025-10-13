/**
 * Test data for various test scenarios
 */

export const testUsers = {
    validUser: {
        username: 'testuser@example.com',
        password: 'SecurePassword123!',
        firstName: 'Test',
        lastName: 'User',
    },
    invalidUser: {
        username: 'invalid@example.com',
        password: 'wrongpassword',
    },
};

export const testProducts = {
    product1: {
        name: 'Test Product 1',
        price: 29.99,
        description: 'A sample test product',
    },
    product2: {
        name: 'Test Product 2',
        price: 49.99,
        description: 'Another sample test product',
    },
};

export const urlEndpoints = {
    login: '/login',
    dashboard: '/dashboard',
    products: '/products',
    checkout: '/checkout',
};

