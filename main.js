'use strict';

// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Create una pagina "graziosa" senza utilizzare bootstrap.

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailGenerata: null,
    };
  },

  methods: {},

  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl).then((response) => {
        console.log(response.data);
        this.mailGenerata = response.data.response;
        // const { data } = response;
        // const { response: email } = data;

        // this.emails.push(email)
      });
    }
  },
}).mount('#app');
