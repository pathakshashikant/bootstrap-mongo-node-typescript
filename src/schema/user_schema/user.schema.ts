import * as z from 'zod';
import { string, object, boolean, TypeOf, date } from 'zod';
const genderValues = ['Male', 'Female', 'Other', 'Not specified'] as const;
const typeOfUserValues = ['individual', 'company', 'student', 'client'] as const;
export const personalUserSchema = object({
	body: object({
		accountStatus: string().default('active'),
		isZPClient: boolean().default(false),
		isZPEmployee: boolean().default(false),
		isWhiteListedUser: boolean().default(false),
		displayName: string({
			required_error: 'Display Name is required',
		}).min(3, 'Name must be greater than 3'),
		email: string({
			required_error: 'Email is required',
		}).email('Not a valid email'),
		password: string({
			required_error: 'Name is required',
		}).min(6, 'Password too short - should be 6 chars minimum'),
		termsAndConditions: boolean({ required_error: 'User must accept terms and conditions' }),
		isOptedForNewsLetters: boolean().default(true),
		gender: z.enum(genderValues).default('Not specified'),
		phoneNumber: string()
			.regex(/^\+[1-9]\d{8,14}$/, 'Not a valid phone number')
			.optional(),

		typeOfUser: z.enum(typeOfUserValues).default('individual'),
		dateOfBirth: date().optional(),
		fullAddress: string().optional(),
	}).strict(),
});

export const businessUserSchema = object({
	body: object({
		jobDesignation: string().default(''),
	}).strict(),
});

export const studentUserTypeSchema = object({
	body: object({
		universityName: string({
			required_error: 'University Name is missing',
		}),
		studentId: string({
			required_error: 'Student ID is missing',
		}),
	}).strict(),
});

export type PersonalUserInput = TypeOf<typeof personalUserSchema>;

export type BusinessUserInput = TypeOf<typeof personalUserSchema & typeof businessUserSchema>;
export type StudentUserInput = TypeOf<typeof personalUserSchema> & TypeOf<typeof studentUserTypeSchema>;
