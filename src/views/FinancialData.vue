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
    <Paginator @page="getPagination" :current-page="currentPage" :links="links"></Paginator>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import Paginator from '@/components/Paginator.vue';
import {useGetPayloads} from '@/composable/useGetPayloads.js';

export default {
  name: 'FinancialData',
  components: {Paginator},
  setup(props) {

    const {
      getData,
      getPagination,
      data,
      links,
      currentPage
    } = useGetPayloads('/v1/sectors-financial-data');

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