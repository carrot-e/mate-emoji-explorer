<template>
  <div>
    <input v-model="value" @keyup.enter="add" />
  </div>
</template>

<script>
  export default {
    name: 'UserInput',
    computed: {
      value: {
        get() {
          return this.$store.getters['current'];
        },
        set(newValue) {
          this.$store.dispatch('updateCurrent', newValue);
        },
      },
    },
    methods: {
      add() {
        this.$store.dispatch('addCurrent');
      },
    },
  };
</script>
