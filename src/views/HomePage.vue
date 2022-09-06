<template>
   <div id="app" />
   <div class="dumb" />
   <el-button @click="store.increment()">+</el-button>
   {{ store.count }}
   {{ t('randomName') }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// import { useRouter, useRoute } from 'vue-router'
import { useCounterStore } from '../store/counter'

// import { ref } from 'vue'

/**
 * Created by InvincibleDudu on 2022/8/23 at 16:48
 */

const { t } = useI18n()
// const router = useRouter()
// const route = useRoute()
const store = useCounterStore()


</script>


<style scoped>

</style>
