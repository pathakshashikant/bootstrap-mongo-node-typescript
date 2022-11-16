import { string, object, TypeOf } from 'zod';
export const userSchema = object({
	body: object({
		fullname: string({ required_error: 'full name is required' }),
		username: string({
			required_error: 'username is required',
		}).min(3, 'user name must be greater than 4 letter'),
		email: string({
			required_error: 'Email is required',
		}).email('Not a valid email'),
		password: string({
			required_error: 'password is required',
		}).min(6, 'Password too short - should be 6 chars minimum'),
	}).strict(),
});

export const loginSchema = object({
	body: object({
		email: string({
			required_error: 'Email is required',
		}).email('Not a valid email'),
		password: string({
			required_error: 'password is required',
		}),
	}).strict(),
});

export type UserInput = TypeOf<typeof userSchema>;

export type LoginInput = TypeOf<typeof loginSchema>;
