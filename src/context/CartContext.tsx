import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CartItem, Product, Color } from "../types";

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; product: Product; size: number; color: Color }
  | { type: "REMOVE_FROM_CART"; id: string; size: number; colorName: string }
  | { type: "UPDATE_QUANTITY"; id: string; size: number; colorName: string; quantity: number }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.product.id &&
          item.selectedSize === action.size &&
          item.selectedColor.name === action.color.name
      );

      let updatedItems = [...state.items];

      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          ...action.product,
          selectedSize: action.size,
          selectedColor: action.color,
          quantity: 1,
        });
      }

      const totalQuantity = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalQuantity,
        totalAmount,
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) =>
          !(
            item.id === action.id &&
            item.selectedSize === action.size &&
            item.selectedColor.name === action.colorName
          )
      );

      const totalQuantity = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalQuantity,
        totalAmount,
      };
    }

    case "UPDATE_QUANTITY": {
      if (action.quantity < 1) return state;

      const updatedItems = state.items.map((item) => {
        if (
          item.id === action.id &&
          item.selectedSize === action.size &&
          item.selectedColor.name === action.colorName
        ) {
          return { ...item, quantity: action.quantity };
        }
        return item;
      });

      const totalQuantity = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalQuantity,
        totalAmount,
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  addToCart: (product: Product, size: number, color: Color) => void;
  removeFromCart: (id: string, size: number, colorName: string) => void;
  updateQuantity: (id: string, size: number, colorName: string, quantity: number) => void;
  clearCart: () => void;
} | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    const savedCart = localStorage.getItem("stepup_cart");
    return savedCart ? JSON.parse(savedCart) : initial;
  });

  useEffect(() => {
    localStorage.setItem("stepup_cart", JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Product, size: number, color: Color) => {
    dispatch({ type: "ADD_TO_CART", product, size, color });
  };

  const removeFromCart = (id: string, size: number, colorName: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id, size, colorName });
  };

  const updateQuantity = (id: string, size: number, colorName: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", id, size, colorName, quantity });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
