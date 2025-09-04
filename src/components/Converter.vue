<template>
  <div class="flex flex-col gap-5 px-10 py-10">
    <h1 class="font-bold headingColor text-2xl">
      Sensitivity Converter by Harlem
    </h1>
    <div>
      <label for="game" class="text-white font-bold text-base mr-1.5">Choose your game:</label>
      <select name="game" id="game" v-model="chosenGame" class="border rounded bgSelect py-1.5 px-3 text-lg" :class="chosenGame === '' ? 'text-white/50' : 'text-white'" @change="selectImageFunc(chosenGame, 'input')" required>
        <option value="" disabled>Please choose your game</option>
        <option v-for="(nameOfTheGame, indx) in games" :key="indx" :value="nameOfTheGame" :disabled="nameOfTheGame === finalGame">{{ nameOfTheGame }}</option>
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
      <select name="finalGame" id="finalGame" v-model="finalGame" class="border rounded bgSelect py-1.5 px-3 text-lg text-white" :class="finalGame === '' ? 'text-white/50' : 'text-white'" @change="selectImageFunc(finalGame, 'output')">
        <option value="" disabled>Please choose your game</option>
        <option v-for="(nameOfTheGame, indx) in games" :key="indx" :value="nameOfTheGame" :disabled="nameOfTheGame === chosenGame">{{ nameOfTheGame }}</option>
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
    <img :src="inputImage" :class="chosenGame === '' ? 'hidden' : 'max-h-80'">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
      <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
  </svg>

    <img :src="outputImage" :class="finalGame === '' ? 'hidden' : 'max-h-80'"></img>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import { CalculateSensitivity, GameImage } from './scripts/converterFuncs';

  const games = ["Apex Legends", "Call of Duty: Black Ops 6", "Call of Duty: Modern Warfare 3 (2023)", "Call of Duty: Warzone", "Counter Strike 2", "Valorant"]

  const chosenGame = ref("")
  const sens = ref("")
  const dpi = ref("")
  const newDpi = ref("")
  const finalGame = ref("")
  const finalSens = ref("")
  const inputImage = ref("")  
  const outputImage = ref("")

  
  function convertFunc() {
    const result = CalculateSensitivity(sens.value, dpi.value, newDpi.value, chosenGame.value, finalGame.value);
    finalSens.value = result
  }

  function selectImageFunc(gameName, selectType) {
    const image = GameImage(gameName);

    if (selectType === "input") {
      inputImage.value = image;
    } else {
      outputImage.value = image;
    }
  }
</script>