const { addItem, removeItem, getTotalItems } = require('../cart');

describe('Shopping Cart Module', () => {

  // --- addItem ---
  describe('addItem()', () => {
    test('should add a valid item to the cart', () => {
      let cart = {};
      addItem(cart, 'apple', 3);
      expect(cart).toEqual({ apple: 3 });
    });

    test('should not add an item with a negative quantity', () => {
      let cart = {};
      addItem(cart, 'banana', -1);
      expect(cart).toEqual({});
    });

    test('should not add an item with quantity 0', () => {
      let cart = {};
      addItem(cart, 'orange', 0);
      expect(cart).toEqual({});
    });

    test('should increase the quantity if the item already exists', () => {
      let cart = {};
      addItem(cart, 'apple', 2);
      addItem(cart, 'apple', 4);
      expect(cart).toEqual({ apple: 6 });
    });
  });

  // --- removeItem ---
  describe('removeItem()', () => {
    test('should remove an existing item from the cart', () => {
      let cart = {};
      addItem(cart, 'milk', 1);
      removeItem(cart, 'milk');
      expect(cart).toEqual({});
    });

    test('should not change the cart when removing a non-existing item', () => {
      let cart = {};
      removeItem(cart, 'cheese');
      expect(cart).toEqual({});
    });

    test('should remove the last item and result in an empty cart', () => {
      let cart = {};
      addItem(cart, 'bread', 5);
      removeItem(cart, 'bread');
      expect(getTotalItems(cart)).toBe(0);
    });
  });

  // --- getTotalItems ---
  describe('getTotalItems()', () => {
    test('should return the correct total number of items', () => {
      let cart = {};
      addItem(cart, 'apple', 3);
      addItem(cart, 'banana', 2);
      expect(getTotalItems(cart)).toBe(5);
    });

    test('should return 0 when the cart is empty', () => {
      let cart = {};
      expect(getTotalItems(cart)).toBe(0);
    });

    
  });

});
