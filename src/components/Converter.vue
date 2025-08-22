<template>
  <div class="flex flex-col gap-5 px-10 py-10">
    <div>
      <label for="game" class="text-white font-bold text-base mr-1.5">Choose your game:</label>
      <select name="game" id="game" v-model="chosenGame" class="border rounded bgSelect py-1.5 px-3 text-lg" :class="chosenGame === '' ? 'text-white/50' : 'text-white'" required>
        <option value="" disabled>Please choose your game</option>
        <option v-for="(nameOfTheGame, indx) in games" :key="indx" :value="nameOfTheGame">{{ nameOfTheGame }}</option>
      </select>
    </div>
    <div>
      <label for="sens" class="text-white font-bold text-base mr-1.5">Your sensitivity: </label>
      <input type="number" step="any" name="sens" id="sens" v-model="sens" placeholder="Enter your sensitivity" class="border rounded bgSelect py-1.5 px-3 text-lg text-white">
    </div>
    <div>
      <label for="dpi" class="text-white font-bold text-base mr-1.5">Your DPI: </label>
      <input type="number" step="any" name="dpi" id="dpi" v-model="dpi" placeholder="Enter your DPI" class="border rounded bgSelect py-1.5 px-3 text-lg text-white">
    </div>
      <div>
      <label for="game" class="text-white font-bold text-base mr-1.5">Choose where to transfer:</label>
      <select name="finalGame" id="finalGame" v-model="finalGame" class="border rounded bgSelect py-1.5 px-3 text-lg text-white" :class="chosenGame === '' ? 'text-white/50' : 'text-white'">
        <option value="" disabled>Please choose your game</option>
        <option v-for="(nameOfTheGame, indx) in games" :key="indx" :value="nameOfTheGame">{{ nameOfTheGame }}</option>
      </select>
    </div>
    <div>
      <label for="newDpi" class="text-white font-bold text-base mr-1.5">Your  new DPI: </label>
      <input type="number" step="any" name="newDpi" id="newDpi" v-model="newDpi" placeholder="Enter your DPI" class="border rounded bgSelect py-1.5 px-3 text-lg text-white">
    </div>
    <div>
      <button @click="convertFunc" class="rounded-md bgButton text-white font-bold text-base py-1.5 px-4 cursor-pointer">Convert</button>
      <p></p>
    </div>
  </div>

  <div class="mt-10 px-10" v-if="finalSens !== '' && finalSens !== null && finalSens !== undefined">
    <p class="text-white font-bold text-base">Your converted sensitivity is: <span class="font-normal bgSelect py-3 px-5 font-base rounded">{{ finalSens }}</span></p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { calcSensCS2ToBF2042, calcSensCS2toVal, calcSensValToCS2, calcSensBF2042ToVal, calcSensWarzone2ToCS2, calcSensCS2ToWarzone2, calcSensBF2042ToCS2, calcSensValToBF2042, calcSensWarzone2ToBF2042, calcSensBF2042ToWarzone2, calcSensValToWarzone2, calcSensWarzone2ToVal, calcSensApexToBF2042, calcSensBF2042ToApex, calcSensApexToVal, calcSensValToApex, calcSensApexToWarzone2, calcSensWarzone2ToApex } from './scripts/converterFuncs';

  const games = ["Counter Strike 2", "Valorant", "Battlefield 2042", "Warzone 2", "Apex Legends"]

  const chosenGame = ref("")
  const sens = ref("")
  const dpi = ref("")
  const newDpi = ref("")
  const finalGame = ref("")
  const finalSens = ref("")
  
  function convertFunc() {
    
    if (chosenGame.value == "Counter Strike 2" && finalGame.value == "Battlefield 2042") {
      finalSens.value = calcSensCS2ToBF2042(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Battlefield" && finalGame.value == "Counter Strike 2") {
      finalSens.value = calcSensBF2042ToCS2(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Counter Strike 2" && finalGame.value == "Valorant") {
      finalSens.value = calcSensCS2toVal(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Valorant" && finalGame.value == "Counter Strike 2") {
      finalSens.value = calcSensValToCS2(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Counter Strike 2" && finalGame.value == "Warzone 2") {
      finalSens.value = calcSensCS2ToWarzone2(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Warzone 2" && finalGame.value == "Counter Strike 2") {
      finalSens.value = calcSensWarzone2ToCS2(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Valorant" && finalGame.value == "Battlefield 2042") {
      finalSens.value = calcSensValToBF2042(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Battlefield 2042" && finalGame.value == "Valorant") {
      finalSens.value = calcSensBF2042ToVal(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Warzone 2" && finalGame.value == "Battlefield 2042") {
      finalSens.value = calcSensWarzone2ToBF2042(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Battlefield 2042" && finalGame.value == "Warzone 2") {
      finalSens.value = calcSensBF2042ToWarzone2(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Valorant" && finalGame.value == "Warzone 2") {
      finalSens.value = calcSensValToWarzone2(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Warzone 2" && finalGame.value == "Valorant") {
      finalSens.value = calcSensWarzone2ToVal(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Apex Legends" && finalGame.value == "Counter Strike 2") {
      finalSens.value = sens.value * (dpi.value / newDpi.value);
    } else if (chosenGame.value == "Counter Strike 2" && finalGame.value == "Apex Legends") {
      finalSens.value = sens.value * (dpi.value / newDpi.value);
    } else if (chosenGame.value == "Apex Legends" && finalGame.value == "Battlefield 2042") {
      finalSens.value = calcSensApexToBF2042(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Battlefield 2042" && finalGame.value == "Apex Legends") {
      finalSens.value = calcSensBF2042ToApex(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Apex Legends" && finalGame.value == "Valorant") {
      finalSens.value = calcSensApexToVal(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Valorant" && finalGame.value == "Apex Legends") {
      finalSens.value = calcSensValToApex(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value = "Apex Legends" && finalGame.value == "Warzone 2") {
      finalSens.value = calcSensApexToWarzone2(sens.value, dpi.value, newDpi.value);
    } else if (chosenGame.value == "Warzone 2" && finalGame.value == "Apex Legends") {
      finalSens.value = calcSensWarzone2ToApex(sens.value, dpi.value, newDpi.value);
    }
  }
</script>