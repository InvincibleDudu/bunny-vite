<script setup lang="ts">
// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

defineProps<{ msg: string }>()

const localStorage = window.localStorage

function clicked (val: Event) {
   console.log('clicked', val)
}

function changeLocale (newLocale: string) {
   locale.value = newLocale
   localStorage.setItem('locale', newLocale)
}
</script>

<template>
   <el-button @click="clicked">{{ msg }}</el-button>
   <el-button @click="changeLocale('en')">en</el-button>
   <el-button @click="changeLocale('zh-CN')">cn</el-button>
</template>

<style scoped>

</style>
