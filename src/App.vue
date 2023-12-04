<script setup>
import { RouterLink, RouterView } from "vue-router";
import entete from "./components/header/header.vue";
import footerVue from "./components/general/footer.vue";
</script>

<template>
  <main>
    <RouterView />
  </main>
   
</template>

<!-- src/App.vue -->
<!--
<template>
  <div class="container mt-5">
    <div class="mb-3">
      <label for="moduleName" class="form-label">Nom du module :</label>
      <input type="text" class="form-control" v-model="moduleStore.moduleName">
    </div>

    
    <section>
      <h3>Concepts de type paragraphe :</h3>
      <button class="btn btn-primary mb-3" @click="moduleStore.addConcept('p')">Ajouter un concept</button> 
  <div v-for="(concept, index) in filteredParagraphConcepts" :key="index" class="border rounded p-3 mb-3"> 
        <div class="mb-3">
          <label for="conceptName" class="form-label">Nom du concept :</label>
          <input type="text" class="form-control" v-model="concept.conceptName">
        </div>
        <div class="mb-3">
          <label for="paragraphContent" class="form-label">Contenu du paragraphe :</label>
          <textarea class="form-control" v-model="concept.paragraphContent"></textarea>
        </div>
        <button class="btn btn-danger" @click="moduleStore.deleteConcept(index)">Supprimer le concept</button>
      </div>
    </section>

     
    <section>
      <h3>Concepts de type liste :</h3>
      <button class="btn btn-primary mb-3" @click="moduleStore.addConcept('liste')">Ajouter un concept</button>
      <div v-for="(concept, index) in filteredListConcepts" :key="index" class="border rounded p-3 mb-3">
        <div class="mb-3">
          <label for="conceptName" class="form-label">Nom du concept :</label>
          <input type="text" class="form-control" v-model="concept.conceptName">
        </div>
        <div class="mb-3">
          <label for="listItems" class="form-label">Éléments de la liste (séparés par des virgules) :</label>
          <input type="text" class="form-control" v-model="concept.listItems">
        </div>
        <button class="btn btn-danger" @click="moduleStore.deleteConcept(index)">Supprimer le concept</button>
      </div>
    </section>

     
    <section>
      <h3>Concepts de type quiz :</h3>
      <button class="btn btn-primary mb-3" @click="moduleStore.addConcept('quiz')">Ajouter un concept</button>
      <div v-for="(concept, index) in filteredQuizConcepts" :key="index" class="border rounded p-3 mb-3">
        <div class="mb-3">
          <label for="conceptName" class="form-label">Nom du concept :</label>
          <input type="text" class="form-control" v-model="concept.conceptName">
        </div>
        <div class="mb-3">
          <label for="question" class="form-label">Question :</label>
          <input type="text" class="form-control" v-model="concept.question">
        </div>
        <div class="mb-3">
          <label for="options" class="form-label">Options de réponse (séparées par des virgules) :</label>
          <input type="text" class="form-control" v-model="concept.options">
        </div>
        <div class="mb-3">
          <label for="answer" class="form-label">Réponse correcte :</label>
          <input type="text" class="form-control" v-model="concept.answer">
        </div>
        <button class="btn btn-danger" @click="moduleStore.deleteConcept(index)">Supprimer le concept</button>
      </div>
    </section>

    <button class="btn btn-success" @click="generateJSON">Générer le JSON</button>
    <div class="mt-3">
      <pre>{{ JSONOutput }}</pre>
    </div>
  </div>
  
</template>

<script>
import { ref , computed} from 'vue';
import { useModuleStore } from './stores';

export default {
  setup() {
    const moduleStore = useModuleStore();
    const JSONOutput = ref('');

    function generateJSON() {
      JSONOutput.value = moduleStore.generateJSON();
    }

     // Définir la propriété calculée pour filtrer les concepts en fonction du type
     

    const getFilteredConcepts = (type) => {
      return computed(() => {
        return moduleStore.concepts.filter(concept => concept.contentType === type);
      });
    };

    // Utilisation de la fonction pour chaque type de contenu
    const filteredParagraphConcepts = getFilteredConcepts('p');
    const filteredListConcepts = getFilteredConcepts('liste');
    const filteredQuizConcepts = getFilteredConcepts('quiz');

    return {
      moduleStore,
      filteredParagraphConcepts,
      filteredListConcepts,
      filteredQuizConcepts,
      JSONOutput,
      generateJSON
    };
  }
}
</script>-->

<style lang="scss">
@import "@/assets/base.css";
@font-face {
  font-family: "Poppins";
  src: local("Poppins"), url(./assets/) format("truetype");
}

#here {
  margin: 0 auto;
  background-color: white;
  font-weight: normal;
  font-family: "Poppins";
  min-height: 100vh;
  margin-bottom: 0px;
}
* {
  font-family: "Poppins";
}
.textBlackShadow {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.344))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
    var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)
    var(--tw-drop-shadow);
}
.textwhiteShadow {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.344))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
    var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)
    var(--tw-drop-shadow);
}
</style>
