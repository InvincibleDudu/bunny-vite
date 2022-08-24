<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function clicked(val: Event) {
   console.log('clicked', val)
}
</script>

<template>
   <el-button @click="clicked">{{ msg }}</el-button>
</template>

<style scoped>

</style>
