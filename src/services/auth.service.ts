import { AxiosError } from 'axios';
import { tesloApi } from '../api/tesloApi';
import { User } from '../interfaces';

export class AuthService {
	static login = async (email: string, password: string): Promise<User> => {
		try {
			const { data } = await tesloApi.post<User>('/auth/login', { email, password });
			console.log(data);
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data)
				throw new Error(error.response?.data)
			}
			console.log(error);
			throw new Error('Unable to login');
		}
	}
}