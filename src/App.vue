<template>
  <TipCalculator v-if="!isMobile" />
  <EntryPanel v-else-if="isMobile & tipsStore.mobilePanel === 'entry'" />
  <ResultPanel v-else />
</template>

<script setup>
import { onUnmounted, onMounted, ref, watchEffect, computed } from 'vue';
import EntryPanel from '@/components/EntryPanel.vue';
import ResultPanel from '@/components/ResultPanel.vue';
import TipCalculator from '@/components/TipCalculator.vue';
import { useTipsStore } from '@/stores/tips.js'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const tipsStore = useTipsStore();

const isMobile = ref(window.innerWidth <= 640);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 640;
};

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
const { result } = useQuery(gql`
    query {
        currencyConversion(
            baseCurrency: "BRL"
            convertCurrencies: ["EUR", "USD"]
        ) {
            conversions {
              rate
            }
        }
    }
`);
const conversions = computed(() => result.value?.currencyConversion?.conversions)


watchEffect(() => {
  if (conversions.value) {
    tipsStore.eurRate = conversions.value[0].rate;
    tipsStore.usdRate = conversions.value[1].rate;
  }
})
</script>
<style></style>