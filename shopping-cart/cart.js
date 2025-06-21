

function addItem(cart, item, quantity) {
  if (!item || typeof item !== 'string' || quantity <= 0 || typeof quantity !== 'number') {
    return cart;
  }

  if (cart[item]) {
    cart[item] += quantity;
  } else {
    cart[item] = quantity;
  }

  return cart;//retruning updated cart
}

function removeItem(cart, item) {
  if (cart[item]) {
    delete cart[item];
  }
  return cart;
}

function getTotalItems(cart) {
  return Object.values(cart).reduce((total, quantity) => total + quantity, 0);//combining all the values in one total value.
}

module.exports = { addItem, removeItem, getTotalItems };
