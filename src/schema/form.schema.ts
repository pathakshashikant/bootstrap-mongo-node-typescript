import * as z from 'zod';
import { string, object, TypeOf } from 'zod';

const subsidiaryOptions = ['Rooftop', 'Ground Mounted'] as const;
const clientsOption = ['Norsk Solar', 'Green Production'] as const;
const billingFrequencyOptions = ['Monthly', 'Quarterly'] as const;
const allowedPaymentOptin = [0, 7, 14];

const dateSchema = z.preprocess((arg) => {
	if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
}, z.date());

export const formSchema = object({
	body: object({
		agreementTitle: string({ required_error: 'Agreement title is required' }),
		subsidiary: z.enum(subsidiaryOptions),
		client: z.enum(clientsOption),
		billingFrequency: z.enum(billingFrequencyOptions),
		paymentTerms: z.number().refine((data) => allowedPaymentOptin.includes(data), {
			message: 'Please check payment options. Expected [0,7,14]',
		}),
		startDate: dateSchema,
		endDate: dateSchema,
	})
		.strict()
		.refine((data) => data.startDate < data.endDate, {
			message: 'End date must be greater than start date',
			path: ['endDate'],
		}),
});

export type FormInput = TypeOf<typeof formSchema>;
