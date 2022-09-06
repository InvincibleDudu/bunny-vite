<template>
   aboutPage
   {{ store.count }}
</template>

<script setup lang="ts">
// import {useI18n} from "vue-i18n"
// import { useRouter, useRoute } from 'vue-router'
// import { ref } from 'vue'
import { useCounterStore } from '../store/counter'

/**
 * Created by InvincibleDudu on 2022/8/23 at 16:48
 */

// const {t} = useI18n()
// const router = useRouter()
// const route = useRoute()
const store = useCounterStore()


</script>


<style scoped>

</style>
