<template>
    <!--
        :class está setando as classes fazendo a verificação automáticamente, ou seja,
        se double == true double entra na classe...
        $emit(event) -> Ao disparar um evento dispara determinado evento (função) 
    -->
    <button class="button"
        @click="$emit('onCalcButtonClick', label)"
        :class="{ double, triple, operation }">
        {{ label }}
    </button>
</template>

<script>
export default {
    // Com o props estamos setando os parâmetros do button
    props: {
        label: {}, // String
        operation: { type: Boolean }, // Boolean
        double: { type: Boolean}, // Boolean
        triple: { type: Boolean} // Boolean
    }
}
</script>

<style>
/* Pseudo-classe para definir variáveis */
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}

.button {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.button:active {
    background-color: #ccc;
}

.button.double {
    grid-column: span 2;
}

.button.triple {
    grid-column: span 3;
}

.button.operation {
    background-color: #fa8231;
    color: #fff;
}

.button.operation:active {
    background-color: #fa8231cc;
}
</style>