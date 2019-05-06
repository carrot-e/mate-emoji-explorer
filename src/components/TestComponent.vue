<template>
  <div id="app">
    <UserInput />
    <List />
  </div>
</template>

<script>
  import UserInput from './UserInputComponent.vue';
  import List from './ListComponent.vue';

  export default {
    name: 'App',
    components: {
      List,
      UserInput,
    },
  };
</script>
