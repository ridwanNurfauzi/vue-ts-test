<template>
    <div class="bg-white text-center">
        <nav>
            <div>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/product">Product</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    }
}
</script>
