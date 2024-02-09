import axios from 'axios';
import { defineStore } from 'pinia'
import { useConfigStore } from "./_config";

const _config = useConfigStore();

export const useAuthStore = defineStore('auth', {
    actions: {
        async login(data: any) {
            try {
                const res = await axios.post(
                    `${_config.API_URL}/login`,
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
        },
        async register(data: any){
            try {
                const res = await axios.post(
                    `${_config.API_URL}/register`,
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