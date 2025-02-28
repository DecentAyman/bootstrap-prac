import { jest } from '@jest/globals';

document.getElementById = jest.fn(() => ({
  classList: {
    add: jest.fn(),
    remove: jest.fn()
  }
}));

describe('Navbar scroll effect', () => {

});
