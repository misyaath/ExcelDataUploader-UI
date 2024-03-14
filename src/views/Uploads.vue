<template>

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
            <th  scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.file_path }}
            </th>
            <th  scope="row"
                 class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             <Badge :status="item.status"></Badge>
            </th>
            <th  scope="row"
                 class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.created_at }}
            </th>
            <th  scope="row"
                 class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.updated_at }}
            </th>
          </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import Badge from '@/components/Batch.vue';

export default {
  name: 'Uploads',
  components: {Badge},

  setup(props) {
    const data = ref([]);
    onMounted(() => {
      axios.get('/v1/upload').then((response) => {
        data.value = response.data.data;
      });
    });

    return {
      data
    };
  }
};
</script>

<style scoped lang="scss">

</style>