<template>
    <div id="footer">
        <small>&copy;Andrew Howard | {{ new Date().getFullYear() }}</small>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
});
</script>

<style lang="scss">
#footer {
    clear: both;
    text-align: center;
}
</style>
