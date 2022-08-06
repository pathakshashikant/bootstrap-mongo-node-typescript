import * as z from 'zod';
import { string, object, boolean, TypeOf, number, date } from 'zod';
const genderValues = ['Male', 'Female', 'Other', 'Not specified'] as const;
const typeOfUserValues = ['individual', 'company', 'student', 'client'] as const;
export const personalUserSchema = object({
	body: object({
		email: string({
			required_error: 'Email is required',
		}).email('Not a valid email'),
		name: string({
			required_error: 'Name is required',
		}).min(5, 'Name must be greater than 5'),
		password: string({
			required_error: 'Name is required',
		}).min(6, 'Password too short - should be 6 chars minimum'),
		termsAndConditions: boolean({ required_error: 'User must accept terms and conditions' }),
		isOptedForNewsLetters: boolean().default(false),
		gender: z.enum(genderValues).default('Not specified'),
		contactNumber: number(),
		jobDesignation: string().default(''),
		typeOfUser: z.enum(typeOfUserValues).default('individual'),
		// subscriptionId: string().optional(),
		// activePlanName: string().optional(),
		// activePlanSubscriptionDate: date().optional(),
		// nextBilledDate: date().optional(),
		dateOfBirth: date().optional(),
		fullAddress: string().optional(),
		accountStatus: string().default('active'),
		isZPClient: boolean().default(false),
		isZPEmployee: boolean().default(false),
		isWhiteListedUser: boolean().default(false),
		createdAt: date().default(new Date()),
		updatedAt: date().default(new Date()),
	}),
});

// export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirmation'>;
export type PersonalUserInput = TypeOf<typeof personalUserSchema>;
