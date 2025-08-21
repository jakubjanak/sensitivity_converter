<template>
  <div class="mb-5">
    <label for="game">Choose your game:</label>
    <select name="game" id="game" v-model="chosenGame" class="border rounded">
      <option value="" disabled>Please choose your game</option>
      <option v-for="(nameOfTheGame, indx) in games" :key="indx" :value="nameOfTheGame">{{ nameOfTheGame }}</option>
    </select>
  </div>

  <label for="sens">Enter your sensitivity: </label>
  <input type="number" step="any" name="sens" id="sens" v-model="sens" class="border rounded">

  <label for="dpi">Enter your DPI: </label>
  <input type="number" step="any" name="dpi" id="dpi" v-model="dpi" class="border rounded">

    <div class="my-5">
    <label for="game">Choose the game where do you wnat to transfer the sensitivity:</label>
    <select name="finalGame" id="finalGame" v-model="finalGame" class="border rounded">
      <option value="" disabled>Please choose your game</option>
      <option v-for="(nameOfTheGame, indx) in games" :key="indx" :value="nameOfTheGame">{{ nameOfTheGame }}</option>
    </select>
  </div>

  <label for="newDpi">Enter your  new DPI: </label>
  <input type="number" step="any" name="newDpi" id="newDpi" v-model="newDpi" class="border rounded">

  <div class="mt-5">
    <button @click="convertFunc" class="rounded-full bg-blue-500 text-white font-medium py-1 px-3 cursor-pointer">Convert</button>
    <p></p>
  </div>

  <div class="mt-10" v-if="finalSens !== '' && finalSens !== null && finalSens !== undefined">
    {{ finalSens }}
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { calcSensCS2ToBF2042, calcSensCS2toVal, calcSensValToCS2, calcSensBF2042ToVal, calcSensWarzone2ToCS2, calcSensCS2ToWarzone2 } from './scripts/converterFuncs';

  const games = ["Counter Strike 2", "Valorant", "Battlefield 2042", "Warzone 2"]

  const chosenGame = ref("")
  const sens = ref("")
  const dpi = ref("")
  const newDpi = ref("")
  const finalGame = ref("")
  const finalSens = ref("")
  
  function convertFunc() {
    if (chosenGame.value == "Counter Strike 2" && finalGame.value == "Battlefield 2042") {
      const result = calcSensCS2ToBF2042(sens.value, dpi.value, newDpi.value);
      finalSens.value = result;
    } else if (chosenGame.value == "Counter Strike 2" && finalGame.value == "Valorant") {
      const result = calcSensCS2toVal(sens.value, dpi.value, newDpi.value);
      finalSens.value = result;
    } else if (chosenGame.value == "Valorant" && finalGame.value == "Counter Strike 2") {
      const result = calcSensValToCS2(sens.value, dpi.value, newDpi.value);
      finalSens.value = result;
    } else if (chosenGame.value == "Battlefield 2042" && finalGame.value == "Valorant") {
      const result = calcSensBF2042ToVal(sens.value, dpi.value, newDpi.value);
      finalSens.value = result;
    } else if (chosenGame.value = "Warzone 2" && finalGame.value == "Counter Strike 2") {
      const result = calcSensWarzone2ToCS2(sens.value, dpi.value, newDpi.value);
      finalSens.value = result;
    } else if (chosenGame.value = "Counter Strike 2" && finalGame.value == "Warzone 2") {
      const result = calcSensCS2ToWarzone2(sens.value, dpi.value, newDpi.value);
      finalSens.value = result;
    }
  }
</script>