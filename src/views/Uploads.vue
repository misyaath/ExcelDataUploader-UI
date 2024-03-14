<template>
  <div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            File Path
          </th>
          <th scope="col" class="px-6 py-3">
            Status
          </th>
          <th scope="col" class="px-6 py-3">
            Created at
          </th>
          <th scope="col" class="px-6 py-3">
            Updated at
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item , key) in data" :key="key" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.file_path }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <Badge :status="item.status"></Badge>
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.created_at }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.updated_at }}
          </th>
        </tr>
        </tbody>
      </table>
    </div>
    <Paginator @page="getPagination" :current-page="currentPage" :links="links"></Paginator>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import Badge from '@/components/Batch.vue';
import Paginator from '@/components/Paginator.vue';
import {useGetPayloads} from '@/composable/useGetPayloads.js';

export default {
  name: 'Uploads',
  components: {Paginator, Badge},

  setup(props) {

    const {
      getData,
      getPagination,
      data,
      links,
      currentPage
    } = useGetPayloads('/v1/upload');

    onMounted(() => {
      getData(1);
    });

    return {
      data,
      links,
      getPagination,
      currentPage
    };
  }
};
</script>

<style scoped lang="scss">

</style>