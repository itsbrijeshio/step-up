export type Category = "running" | "casual" | "formal" | "sports" | "sandals";
export type Gender = "men" | "women" | "kids" | "unisex";

export interface Color {
  name: string;
  hex: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  gender: Gender;
  price: number;
  originalPrice: number;
  discount: number;
  sizes: number[];
  colors: Color[];
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  material: string;
  weight: string;
  isNew: boolean;
  isTrending: boolean;
  description: string;
  reviews?: Review[];
}

export interface CartItem extends Product {
  selectedSize: number;
  selectedColor: Color;
  quantity: number;
}

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  total: number;
  items: number;
  date: string;
  paymentMethod: string;
}
