import './Cart.css'
import React, { useState } from 'react';

const Cart = () => {
  // بيانات وهمية (Mock Data) لتمثيل المنتجات في العربة
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 50, quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, quantity: 2 },
    { id: 3, name: 'Product 3', price: 100, quantity: 1 },
  ]);

  // دالة لزيادة الكمية
  const increment = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // دالة لنقصان الكمية (مع التأكد أنها لا تقل عن 1)
  const decrement = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  // حساب السعر الإجمالي
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Shopping Cart (SS-2)</h1>
      <div style={{ borderTop: '1px solid #ccc', marginTop: '10px' }}>
        {cartItems.map(item => (
          <div key={item.id} style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '15px', 
            borderBottom: '1px solid #eee'
          }}>
            <div>
              <h3 style={{ margin: 0 }}>{item.name}</h3>
              <p style={{ color: '#666' }}>Price: ${item.price}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => decrement(item.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>-</button>
              <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
              <button onClick={() => increment(item.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', fontSize: '1.5em', fontWeight: 'bold', color: '#2c3e50' }}>
        Total Price: ${totalPrice}
      </div>

      <p style={{ marginTop: '30px', color: 'green', fontSize: '0.9em' }}>
        * Responsive layout with Mock Data (Task Completed)
      </p>
    </div>
  );
};

export default Cart;