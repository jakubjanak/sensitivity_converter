<template>
  <div class="flex flex-col gap-5 px-10 py-10">
    <h1 class="font-bold headingColor text-2xl">
      Sensitivity Converter by Harlem
    </h1>
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
      <select name="finalGame" id="finalGame" v-model="finalGame" class="border rounded bgSelect py-1.5 px-3 text-lg text-white" :class="finalGame === '' ? 'text-white/50' : 'text-white'">
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
    <p class="text-white font-bold text-base">Your converted sensitivity is: <span class="font-normal bgButton py-3 px-5 ml-2.5 font-base rounded">{{ finalSens }}</span></p>
  </div>

  <div :class="chosenGame === '' & finalGame === '' ? 'hidden' : 'flex justify-between items-center w-max mt-10 px-10'">
    <img :src="chosenGame === 'Counter Strike 2' ? '/cs2.jpg' : chosenGame === 'Valorant' ? '/valorant.jpg' : chosenGame === 'Battlefield 2042' ? '/bf2042.jpg' : chosenGame === 'Warzone 2' ? '/warzone2.jpg' : chosenGame === 'Apex Legends' ? '/apex.jpg' : ''" :alt="chosenGame === 'Counter Strike 2' ? 'Counter Strike 2' : chosenGame === 'Valorant' ? 'Valorant' : chosenGame === 'Battlefield 2042' ? 'Battlefield 2042' : chosenGame === 'Warzone 2' ? 'Warzone 2' : chosenGame === 'Apex Legends' ? 'Apex Legends' : ''" :class="chosenGame === '' ? 'hidden' : 'max-h-80'">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
      <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
  </svg>

    <img :src="finalGame === 'Counter Strike 2' ? '/cs2.jpg' : finalGame === 'Valorant' ? '/valorant.jpg' : finalGame === 'Battlefield 2042' ? '/bf2042.jpg' : finalGame === 'Warzone 2' ? '/warzone2.jpg' : finalGame === 'Apex Legends' ? '/apex.jpg' : ''" :alt="finalGame === 'Counter Strike 2' ? 'Counter Strike 2' : finalGame === 'Valorant' ? 'Valorant' : finalGame === 'Battlefield 2042' ? 'Battlefield 2042' : finalGame === 'Warzone 2' ? 'Warzone 2' : finalGame === 'Apex Legends' ? 'Apex Legends' : ''" :class="finalGame === '' ? 'hidden' : 'max-h-80'"></img>
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