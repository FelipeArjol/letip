import { defineStore } from 'pinia';

export const useTipsStore = defineStore('tips', {
    state: () => ({
        currencySelectedIsUsd: false,
        bill: 0,
        tip: 10,
        people: 2,
        usdRate: 0,
        eurRate: 0,
        mobilePanel: 'entry',
    }),
    getters: {
        vMoneyConfig() {
            if (this.currencySelectedIsUsd === false) {
                return {
                    config: {
                        decimal: ',',
                        thousands: '.',
                        prefix: '€ ',
                        suffix: '',
                        disableNegative: true,
                        min: 0,
                        precision: 2,
                    },
                };
            }

            return {
                config: {
                    decimal: ',',
                    thousands: '.',
                    prefix: '$ ',
                    suffix: '',
                    disableNegative: true,
                    min: 0,
                    precision: 2,
                },
            };
        },
        calculateTip() {
            return this.bill * (this.tip / 100);
        },
        calculateTotal() {
            return this.bill + this.calculateTip;
        },
        calculateTotalWithTip() {
            return this.bill + this.calculateTip;
        },
        calculateTotalPerPerson() {
            const totalWithTip = this.calculateTotalWithTip;
            return (totalWithTip / this.people).toFixed(3);
        },
        brlValue() {
            if (this.currencySelectedIsUsd) {
                return this.calculateTotalPerPerson * this.usdRate;
            }
            return this.calculateTotalPerPerson * this.eurRate;
        },
    },
    actions: {
        formatCurrency(value, desiredFormat = null) {
            let format = '';
            if (this.currencySelectedIsUsd) {
                format = 'USD';
            } else {
                format = 'EUR';
            }
            if (desiredFormat != null) {
                format = desiredFormat;
            }
            return parseFloat(value).toLocaleString('en-US', {
                style: 'currency',
                currency: format,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        },
    },
});
