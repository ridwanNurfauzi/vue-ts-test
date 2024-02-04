import axios from 'axios';
import { defineStore } from 'pinia'
  
export const useProductStore = defineStore('product', {
    state: () => ({
        products: null
    }),

    actions: {
        async setProducts() {
            try {
                const productsData = await axios.get("https://fakestoreapi.com/products");

                this.$state.products = productsData.data;
            } catch (error) {
                alert('error');
            }
        }
    }
});
