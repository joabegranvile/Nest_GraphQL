import { Injectable } from '@nestjs/common';
import { User } from './models/users.model';

@Injectable()
export class UsersService {
	private users: User[] = [
		{ id: 1, name: 'John', email: 'j@j.com' },
		{ id: 2, name: 'Jane', email: 'j@j.com' },
		{ id: 3, name: 'Jack', email: 'j@j.com' },
	]

	findAll(): Promise<User[]> {
		return Promise.resolve(this.users);
	}
}
