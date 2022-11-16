import { FormInput } from './../schema/form.schema';
import FormModel from '../model/form.model';

export async function submitFormService<T extends FormInput['body']>(input: T) {
	try {
		const result = await FormModel.create(input);
		return result;
	} catch (e: any) {
		throw new Error(e);
	}
}
