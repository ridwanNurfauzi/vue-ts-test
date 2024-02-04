<template>
    <div>
        <nav>
            <div>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/product">Product</RouterLink>
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
