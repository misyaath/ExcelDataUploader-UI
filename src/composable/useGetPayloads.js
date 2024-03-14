import axios from 'axios';
import {ref} from 'vue';

export function useGetPayloads(endpoint) {

	const data = ref({});
	const links = ref([]);
	const currentPage = ref(0);

	const getData = (page) => {
		axios.get(endpoint + '?page=' + page).then((response) => {
			data.value = response.data.data;
			links.value = response.data.meta.links;
			currentPage.value = response.data.meta.current_page;
		});
	};

	const getPagination = (page) => {
		console.log(page)
		getData(page.page);
	};

	return {
		getData,
		getPagination,
		data,
		links,
		currentPage
	};
}