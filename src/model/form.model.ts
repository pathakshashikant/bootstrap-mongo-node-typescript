import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}

const formSchema = new mongoose.Schema(
	{
		agreementTitle: { type: String, trim: true },
		billingFrequency: { type: String },
		client: { type: String },
		subsidiary: { type: String },
		paymentTerms: { type: Number },
		startDate: { type: Date },
		endDate: { type: Date },
	},
	{
		timestamps: true,
	},
);

const FormModel = mongoose.model('Form', formSchema);

export default FormModel;
