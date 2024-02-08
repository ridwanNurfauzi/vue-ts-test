<template>
    <div>
        <form method="post" name="f_test">
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td><input type="text" name="nama" id="nama"></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>:</td>
                    <td><input type="text" name="pass" id="pass"></td>
                </tr>
                <tr>
                    <td>file</td>
                    <td>:</td>
                    <td>
                        <input type="file" name="file" id="file" accept="image/png, image/jpeg">
                    </td>
                </tr>
            </table>
            <input class="bg-blue-500 text-white rounded-md p-2" type="button" @click="_test()" value="kirim">
        </form>
        {{ nama }}
    </div>
</template>

<script lang="ts">
import { useTestStore } from "@/stores/test";
import { mapActions } from "pinia";

export default {
    data() {
        return {
            nama: ''
        };
    },
    methods: {
        ...mapActions(useTestStore, ['test']),

        async _test() {
            const fData = new FormData(document.forms[0]);
            console.log(fData);
            console.log(await this.test(fData));
        }
    }
}
</script>