<script setup>
import { useTipsStore } from '../stores/tips.js'
import { Money3Component as MoneyInput } from 'v-money3'

const tipsStore = useTipsStore();

const showResultPanel = () => {
    tipsStore.mobilePanel = 'result';
};
</script>



<template>
    <div class="container">
        <div class="container__title">
            <h1>Le/Tip</h1>
        </div>
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

        <div class="container__actions">
            <button class="container__actions__button"
                    @click="showResultPanel">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="icon icon-tabler icon-tabler-arrow-narrow-right"
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
                    <path d="M15 16l4 -4" />
                    <path d="M15 8l4 4" />
                </svg>
            </button>
        </div>
    </div>
</template>
