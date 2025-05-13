import { Product } from '@/libs/types/types';

export class LocalStorageAdapter {
  private static STORAGE_KEY = 'products';

  static save(products: Product[]): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  static load(): Product[] {
    try {
      if (typeof window !== 'undefined') {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
      }
      return [];
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return [];
    }
  }

  static clear(): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}