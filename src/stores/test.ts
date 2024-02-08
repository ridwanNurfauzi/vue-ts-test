import axios from 'axios';
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
    actions: {
        async test(data: any) {
            try {
                const res = await axios.post(
                    "http://localhost:3000/test",
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