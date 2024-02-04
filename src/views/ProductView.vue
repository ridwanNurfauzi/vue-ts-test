<template>
    <div>
        {{ !!products ? products : 'Loading' }}
    </div>
</template>

<script lang="ts">
import { useProductStore } from "@/stores/products";
// import { mapState } from "pinia";

const productData = useProductStore();

export default {
    computed: {
        // ...mapState(useProductStore, ['products'])
        products: () => productData.products
    },
    beforeCreate() {
        productData.setProducts();
    }
}
</script>