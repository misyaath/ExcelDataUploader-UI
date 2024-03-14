<template>

  <span v-show="status === 'processed'"
        class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
   {{status}}</span>
  <span v-show="status === 'terminated'"
        class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
    {{status}}</span>
  <span v-show="status === 'uploaded'"
        class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
    {{status}}</span>
  <span v-show="status === 'processing'"
        class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
    {{status}}</span>


</template>

<script>
export default {
  name: 'Badge',
  props: {
    status: {
      type: String
    }
  },
  setup(props) {

  }
};
</script>
<style scoped lang="scss">

</style>