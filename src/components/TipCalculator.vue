<script setup>
import { useTipsStore } from '../stores/tips.js'
import { Money3Component as MoneyInput } from 'v-money3'

const tipsStore = useTipsStore();

</script>

<template>
    <div class="container">
        <h1 class="container__title">Le/Tip</h1>
        <div class="container__inputs">
            <div class="currency">
                <label class="switch"
                       for="currency__selector">
                    EUR / USD
                </label>
                <div>
                    <input type="checkbox"
                           v-model="tipsStore.currencySelectedIsUsd">
                    <span class="currency__slider"></span>
                </div>
            </div>
            <div class="bill">
                <label class="bill__text"
                       for="billtext">
                    Valor {{ tipsStore.currencySelectedIsUsd ? "$ " : "€ " }}
                </label>
                <div class="masked_input">
                    <MoneyInput style="width: 60%;"
                                v-model.number="tipsStore.bill"
                                v-bind="tipsStore.vMoneyConfig">
                    </MoneyInput>
                </div>
            </div>
            <div class="tip">
                <label class="tip__input"
                       for="tipRange">
                    Gorjeta: {{ tipsStore.tip }} %
                </label>
                <div>
                    <input type="range"
                           v-model="tipsStore.tip"
                           id="tipRange"
                           min="10"
                           max="20">
                </div>
            </div>
            <div class="people">
                <label class="people__input"
                       for="people">
                    Pessoas: {{ tipsStore.people }}
                </label>
                <div>
                    <input type="range"
                           v-model="tipsStore.people"
                           id="people"
                           min="2"
                           max="16">
                </div>
            </div>
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
    </div>
</template>