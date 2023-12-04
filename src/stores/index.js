// src/store/index.js
import { defineStore } from 'pinia';

export const useModuleStore = defineStore('module', {
  state: () => ({
    moduleName: '',
    concepts: [
      {
        conceptName: '',
        contentType: 'p',
        paragraphContent: '',
        listItems: '',
        question: '',
        options: '',
        answer: '',
      },
    ],
  }),
  actions: {
    addConcept(type) {
      this.concepts.push({
        conceptName: '',
        contentType: type,
        paragraphContent: '',
        listItems: '',
        question: '',
        options: '',
        answer: '',
      });
    },
    deleteConcept(index) {
      this.concepts.splice(index, 1);
    },
    generateJSON() {
      const jsonData = {
        module: this.moduleName,
        concepts: this.concepts,
      };
      return JSON.stringify(jsonData, null, 2);
    },
  },
});
