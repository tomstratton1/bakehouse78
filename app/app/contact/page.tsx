"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import menuItems from '../data/menuItems';

export default function ContactPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);
      if (existingItem?.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.title !== item.title);
      }
    });
  };

  return (
    <main>
      <Navbar />
      <section className="py-16 bg-lightGray text-center">
        <h1 className="text-5xl font-bold text-charcoal mb-8">Contact Us</h1>
        <h2 className="text-4xl font-bold text-charcoal mb-8">Order Form</h2>
        <div className="flex flex-col items-center">
          {menuItems.map((category, index) => (
            <div key={index} className="w-full max-w-4xl mb-12">
              <h2 className="text-3xl font-semibold text-charcoal mb-4">{category.category}</h2>
              <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Item</th>
                    <th className="px-4 py-2 border">Quantity</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, idx) => (
                    <tr key={idx} className="text-center">
                      <td className="px-4 py-2 border">{item.title}</td>
                      <td className="px-4 py-2 border">
                        {cart.find((cartItem) => cartItem.title === item.title)?.quantity || 0}
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                          >
                            -
                          </button>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
