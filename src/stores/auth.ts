import axios from 'axios';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    actions: {
        async login(data: any) {
            try {
                const res = await axios.post(
                    "http://localhost:3000/login",
                    data,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );

                return res.data;
            } catch (error) {
                return false;
            }
        }
    }
});