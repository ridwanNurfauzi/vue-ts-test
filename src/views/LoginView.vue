<template>
    <div class="flex-1 flex flex-col bg-[url('/images/bg1.jpg')] bg-cover">
        <div
            class="m-0 my-auto sm:mx-auto sm:w-[540px] flex-grow sm:flex-grow-0 flex flex-col bg-gray-50 bg-opacity-[.65] p-8 sm:rounded-xl shadow-lg backdrop-blur-sm">
            <div class="flex flex-col my-auto">
                <div class="mt-2">
                    <h1 class="text-center text-2xl font-semibold">Login Pengguna</h1>
                </div>
                <div class="my-2">
                    <form method="post">
                        <div class="flex flex-col my-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Masukkan Email . . ." autocomplete="on" required />
                        </div>
                        <div class="flex flex-col my-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password"
                                class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Masukkan Password . . ." required />
                        </div>
                        <div class="my-5">
                            <a href="#" class="text-blue-700 hover:underline">Belum punya akun?</a>
                        </div>
                        <div class="my-5 flex flex-row">
                            <div class="ms-auto">
                                <input type="reset" value="Reset"
                                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" />
                                <input type="button" value="Masuk" @click="_login()"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";

export default {
    methods: {
        ...mapActions(useAuthStore, ['login']),

        async _login() {
            const fData = new FormData(document.forms[0]);
            console.log(await this.login(fData));
        }
    }
}
</script>
