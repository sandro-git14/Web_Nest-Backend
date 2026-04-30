/* eslint-disable prettier/prettier */
import { Product } from './products.interface';

export class ProductData {
  getProductData(): Record<string, Record<string, Product>> {
    return {
    sportsAccessories: {
    FootBall: {
          id: 0,
          productName: 'Football',
          price: 25,
          crossedPrice: '30',
          productImage: 'football.png',
          starsCount: 4.5,
          orderedThisMonth: 120,
          inStock: true,
          deliveryTime: '2 days',
          shippingTime: '1 day',
          shipperName: 'DHL',
          brand: 'Nike',
          category: 'Sports Accessories',
          weight: 0.5,
          stockQuantity: 50,
          height: 10,
          width: 10,
        },

    Boots: {
        id: 11,
        productName: 'Boots - Mercurials v10.0',
        price: 6,
        crossedPrice: '110',
        productImage: 'football.png',
        starsCount: 5.0,
        orderedThisMonth: 1550,
        inStock: false,
        deliveryTime: '15 days',
        shippingTime: '10 day',
        shipperName: '',
        brand: 'Nike',
        category: 'Sports Accessories',
        weight: 1,
        stockQuantity: 0,
        height: 10,
        width: 10,
    },

    Football_Shirt: {
        id: 14,
        productName: 'Roberto Calos 1990 - Soccer Shirt',
        price: 60,
        crossedPrice: '100',
        productImage: 'RobertoCarlos_Shirt.png',
        starsCount: 5.0,
        orderedThisMonth: 1567,
        inStock: true,
        deliveryTime: '3 days',
        shippingTime: '1 day',
        shipperName: 'Albert Einstein',
        brand: 'Puma',
        category: 'Sports Accessories',
        weight: 0.8,
        stockQuantity: 50,
        height: 10,
        width: 10,
    }

    },
    };
  }
}