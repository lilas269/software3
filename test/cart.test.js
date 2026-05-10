// test/cart.test.js - Shopping Cart Tests

function addToCart(cart, itemId, price) {
  const existing = cart.find(item => item.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: itemId, price: price, quantity: 1 });
  }
  return cart;
}

function removeFromCart(cart, itemId) {
  return cart.filter(item => item.id !== itemId);
}

function updateQuantity(cart, itemId, newQuantity) {
  const item = cart.find(item => item.id === itemId);
  if (item && newQuantity > 0) {
    item.quantity = newQuantity;
  }
  return cart;
}

function getTotalPrice(cart) {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

test('addToCart adds new item', () => {
  let cart = [];
  cart = addToCart(cart, 1, 10);
  expect(cart.length).toBe(1);
  expect(cart[0].quantity).toBe(1);
});

test('addToCart increases quantity if item exists', () => {
  let cart = [{ id: 1, price: 10, quantity: 1 }];
  cart = addToCart(cart, 1, 10);
  expect(cart[0].quantity).toBe(2);
});

test('removeFromCart deletes item', () => {
  let cart = [{ id: 1, price: 10, quantity: 1 }];
  cart = removeFromCart(cart, 1);
  expect(cart.length).toBe(0);
});

test('updateQuantity changes item quantity', () => {
  let cart = [{ id: 1, price: 10, quantity: 1 }];
  cart = updateQuantity(cart, 1, 5);
  expect(cart[0].quantity).toBe(5);
});

test('getTotalPrice calculates correctly', () => {
  const cart = [
    { id: 1, price: 10, quantity: 2 },
    { id: 2, price: 5, quantity: 3 }
  ];
  const total = getTotalPrice(cart);
  expect(total).toBe(35);
});