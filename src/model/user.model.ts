import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema(
	{
		email: { type: String, required: true, trim: true },
		password: { type: String, required: true },
		username: { type: String, unique: true, required: true, trim: true },
		fullname: { type: String, required: true },
	},
	{
		collection: 'userDB',
		timestamps: true,
	},
);

userSchema.pre('save', function (next) {
	const user = this;
	if (user.isModified(user.password) || user.isNew) {
		bcrypt.hash(user.password, 10, function (error, hash) {
			if (error) return next(error);
			user.password = hash;
			next();
		});
	} else {
		return next();
	}
});

userSchema.post('save', function (_, next) {
	next();
});

userSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
