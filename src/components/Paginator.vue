<template>
  <div class="pt-2 flex items-center justify-center">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-base h-10">

        <li v-for="(item , key) in links">

          <a href="#" v-if="key === 0 " @click="previous"
             class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          <a href="#" v-else
             @click="getPagination(key)"
             :class="[item.active ?
               'text-blue-600 bg-blue-50 hover:text-blue-700 dark:text-white border border-gray-300  hover:bg-blue-100  dark:border-gray-700 dark:bg-gray-700 ':
               'bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']"
             class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 ">
            {{ key }}
          </a>
        </li>
        <li>
          <a href="#" @click="next"
             class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    links: {
      type: Array,
      default: []
    },
    currentPage: {
      type: Number,
      default: 0
    }
  },
  emits: ['page'],
  setup(props, {emit}) {
    const previous = () => {
      emit('page', {page: props.currentPage - 1});
    };
    const getPagination = (page) => {
      emit('page', {page: page});
    };
    const next = () => {
      emit('page', {page: props.currentPage + 1});
    };
    return {
      previous,
      getPagination,
      next
    };
  }

};
</script>
<style scoped lang="scss">

</style>