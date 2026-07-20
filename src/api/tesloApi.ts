import axios from 'axios';
import { useAuthStore } from '../stores';

const tesloApi = axios.create({
	baseURL: 'http://localhost:3000/api',
});

// Leer el store de Zustan para incluir el token en el interceptor de las peticiones HTTP
tesloApi.interceptors.request.use(
	(config) => {
		const token = useAuthStore.getState().token;
		console.log({ token });

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	}
);

export {
	tesloApi
};