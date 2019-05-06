<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="addCurrent">Click me</button>
  </div>
</template>

<script>
  export default {
    name: 'List',
    computed: {
      items() {
        return this.$store.getters['items'];
      },
    },
    methods: {
      addCurrent() {
        this.$store.dispatch('addCurrent');
      }
    }
  };
</script>
