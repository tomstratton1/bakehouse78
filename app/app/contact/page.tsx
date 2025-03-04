"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import menuItems from '../data/menuItems';
import MessageBox from "../components/MessageBox";
import Socials from '../components/Socials';

// Define the CartItem and MenuCategory interfaces
interface CartItem {
  title: string;
  price?: number;
  quantity: number;
}

interface MenuItem {
  title: string;
  price?: number;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export default function ContactPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
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

  const removeFromCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);
      if (existingItem && existingItem.quantity > 1) {
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

  // Filter out items with zero quantity for the Order Summary
  const nonZeroCartItems = cart.filter((cartItem) => cartItem.quantity > 0);

  return (
    <main>
      <Navbar />
      <section className="py-16 bg-offWhite text-center">
        <h1 className="text-5xl font-bold text-charcoal mb-8">Contact Us</h1>

        <Socials/>

        {/* Message Box Component - Includes Order Summary */}
        <MessageBox orderSummary={nonZeroCartItems} />

        <h2 className="text-4xl font-bold text-charcoal mb-8">Order Form</h2>
        <p className="absolute bottom-4 left-0 w-full text-offWhite text-lg font-semibold z-10 text-center">
          Use the order forms below to add items to your message. We will be in contact to facilitate your order as soon as possible.
        </p>
        <div className="flex flex-col items-center">
          {menuItems.map((category: MenuCategory) => (
            <div key={category.category} className="w-full max-w-4xl mb-12">
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
                  {category.items.map((item) => (
                    <tr key={item.title} className="text-center text-charcoal">
                      <td className="px-4 py-2 border break-words whitespace-normal">{item.title}</td>
                      <td className="px-4 py-2 border">
                        {cart.find((cartItem) => cartItem.title === item.title)?.quantity || 0}
                      </td>
                      <td className="px-4 py-2 border">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item)}
                            className="bg-sunset text-white px-2 py-1 rounded hover:bg-red-600"
                          >
                            -
                          </button>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-leafyGreen text-white px-2 py-1 rounded hover:bg-green-600"
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
