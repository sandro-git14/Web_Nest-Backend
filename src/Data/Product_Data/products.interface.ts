/* eslint-disable prettier/prettier */

export interface Product {
  id: number;
  productName: string;
  price: number;
  crossedPrice: string;
  productImage: string; // usually a URL or base64 string
  starsCount: number;
  orderedThisMonth: number;
  inStock: boolean;
  deliveryTime: string;
  shippingTime: string;
  shipperName: string;
  brand: string;
  category: string;
  weight: number;
  stockQuantity: number;
  height: number;
  width: number;
}