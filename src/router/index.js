import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Uploads from '@/views/Uploads.vue';
import FinancialData from '@/views/FinancialData.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/uploads',
			name: 'uploads',
			component: Uploads
		},
		{
			path: '/financial-data',
			name: 'financial-data',
			component: FinancialData
		}
	]
});

export default router;
