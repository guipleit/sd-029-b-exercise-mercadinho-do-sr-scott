import { CartItem } from './types/CartItem';
import { Drink } from './types/Drink';
import { Food } from './types/Food';

export const first = <T>(items: T[]): T => items[0];

export const updateItem = <T>(arr: T[], index: number, item: T): T[] => {
  if (arr[index] === undefined) return arr;
  const newArr = [...arr];
  newArr[index] = item;
  return newArr;
};

export const buildCartItem = (item: Food | Drink, quantity: number): CartItem => {
  const finalItem = {
    name: item.name,
    price: item.price,
    quantity,
  } as CartItem;
  return finalItem;
};