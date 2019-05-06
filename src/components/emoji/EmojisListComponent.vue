<template>
  <div>
    <h1>emoji Explorer</h1>
    <input v-model="searchValue" />
    <ul>
      <li v-for="emoji in shownEmojis" :key="emoji.no">
        {{ emoji.char }}{{ emoji.name }}
      </li>

      <li v-if="shownEmojis.length === 0">
        Nothing there...
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'EmojisList',
    data() {
      return {
        searchValue: '',
        list: []
      };
    },
    computed: {
      shownEmojis() {
        let filteredList = this.list;

        if (this.searchValue !== '') {
          filteredList = this.list.filter((emoji) => {
            return emoji.keywords.includes(this.searchValue.toLowerCase());
          });
        }

        return filteredList.slice(0, 20);
      },
    },
    methods: {
      requestList() {
        return fetch('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json')
          .then(response => response.json())
          .then(data => this.list = data);
      }
    },
    created() {
      this.requestList();
    }
  }
</script>
