<template>
  <div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Segment
          </th>
          <th scope="col" class="px-6 py-3">
            Country
          </th>
          <th scope="col" class="px-6 py-3">
            Product
          </th>
          <th scope="col" class="px-6 py-3">
            Discount Band
          </th>
          <th scope="col" class="px-6 py-3">
            Units Sold
          </th>
          <th scope="col" class="px-6 py-3">
            Manufacturing Price
          </th>
          <th scope="col" class="px-6 py-3">
            Sale Price
          </th>
          <th scope="col" class="px-6 py-3">
            Gross Sales
          </th>
          <th scope="col" class="px-6 py-3">
            Discounts
          </th>
          <th scope="col" class="px-6 py-3">
            Sales
          </th>
          <th scope="col" class="px-6 py-3">
            COGS
          </th>
          <th scope="col" class="px-6 py-3">
            Profit
          </th>
          <th scope="col" class="px-6 py-3">
            Month Number
          </th>
          <th scope="col" class="px-6 py-3">
            Month Name
          </th>
          <th scope="col" class="px-6 py-3">
            Year
          </th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(item , key) in data" :key="key" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.segment }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.country }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.product }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.discount_band }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.units_sold }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.manufacturing_price }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.sale_price }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.gross_sales }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.discounts }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.sales }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.cogs }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.profit }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.month_number }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.month_name }}
          </th>
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.year }}
          </th>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="pt-2 flex items-center justify-center">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-base h-10">

          <li v-for="(item , key) in links">

            <a href="#" v-if="key === 0 "
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
            <a href="#"
               class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';

export default {
  name: 'FinancialData',
  setup(props) {
    const data = ref([]);
    const links = ref([]);

    const getPagination = (page) => {
      getData(page);
    };

    const getData = (page) => {
      axios.get('/v1/sectors-financial-data?page=' + page).then((response) => {
        data.value = response.data.data;
        links.value = response.data.meta.links;
      });
    };
    onMounted(() => {
      getData(1);
    });

    return {
      data,
      links,
      getPagination
    };
  }
};
</script>

<style scoped lang="scss">

</style>