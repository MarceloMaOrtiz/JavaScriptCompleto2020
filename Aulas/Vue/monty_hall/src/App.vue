<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <!-- por conta dos ' : ' o false é passado como boolean -->
        <div class="form">
            <!-- Só aparece o que tem dentro de não tiver started -->
            <div v-if="!started">
                <label for="doorsAmount">Quatas Portas?</label>
                <!--
                    v-model atualiza os dados no estado do componente usando Two Way Data Bind
                    v-model.number faz com que o valor armazenado seja do tipo number
                -->
                <input type="text" id="doorsAmount" size="3"
                    v-model.number="doorsAmount">
            </div>
            <div v-if="!started">
                <label for="selectedDoor">Qual a porta é premiada?</label>
                <input type="text" id="selectedDoor" size="3"
                    v-model.number="selectedDoor">
            </div>
            <button v-if="!started" @click="started = true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in doorsAmount" :key="i">
                <Door :hasGift="i == selectedDoor" :number="i" />
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door.vue'

export default {
    // Não é obrigatório o uso do nome, mas é interessante para encontrar alguns problemas
    // durante especionamentos e debugs
    name: 'App',
    components: { Door },
    data: function() {
        return {
            started: false,
            doorsAmount: 3,
            selectedDoor: null
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #fff;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 2rem;
}

.doors {
    /* stretch -> Faz com que ocupe a tela inteira, ao invés de alinhar somente no centro */
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    /* wrap -> Quebra a linha quando necessário, ao invés de criar barra de rolagem na horizontal */
    flex-wrap: wrap;
}
</style>