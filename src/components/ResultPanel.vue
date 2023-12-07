<script setup>
import { useTipsStore } from '../stores/tips.js'

const tipsStore = useTipsStore();

const showEntryPanel = () => {
    tipsStore.mobilePanel = 'entry';
};
</script>

<template>
    <div class="container">
        <div class="container__title">
            <h1>Le/Tip</h1>
        </div>
        <div class="container__results">
            <div>
                <p class="container__results__label">Conta </p>
                <p class="container__results__value">{{ tipsStore.formatCurrency(tipsStore.bill) }}</p>
            </div>
            <div>
                <p class="container__results__label">Gorjeta</p>
                <p class="container__results__value">{{ tipsStore.formatCurrency(tipsStore.calculateTip) }}</p>
            </div>
            <div>
                <p class="container__results__label">Total</p>
                <p class="container__results__value">{{ tipsStore.formatCurrency(tipsStore.calculateTotal) }}</p>
            </div>
            <div>
                <p class="container__results__label">Por pessoa</p>
                <p class="container__results__value">{{ tipsStore.formatCurrency(tipsStore.calculateTotalPerPerson) }}</p>
            </div>
            <div>
                <p class="container__results__label">Em reais</p>
                <p class="container__results__value">{{ tipsStore.formatCurrency(tipsStore.brlValue, 'brl') }} </p>
            </div>
        </div>

        <div class="container__actions">
            <button class="container__actions__button"
                    @click="showEntryPanel">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="icon icon-tabler icon-tabler-arrow-narrow-left"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     stroke-width="2"
                     stroke="currentColor"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l4 4" />
                    <path d="M5 12l4 -4" />
                </svg>
            </button>
        </div>
    </div>
</template>