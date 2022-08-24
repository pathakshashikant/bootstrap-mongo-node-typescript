export interface PersonalUserInput {
	dateOfBirth?: Date | undefined;
	fullAddress?: string | undefined;
	email: string;
	name: string;
	password: string;
	termsAndConditions: boolean;
	isOptedForNewsLetters: boolean;
	gender: 'Male' | 'Female' | 'Other' | 'Not specified';
	phoneNumber: number;
	jobDesignation: string;
	typeOfUser: 'individual' | 'company' | 'student' | 'client';
	accountStatus: string;
	isZPClient: boolean;
	isZPEmployee: boolean;
	isWhiteListedUser: boolean;
	createdAt: Date;
	updatedAt: Date;
}
export interface CompanyUserInput extends PersonalUserInput {
	jobDesignation: string;
	companyName: string;
}

export interface ClientUserInput extends PersonalUserInput {
	clientName: string;
}
export interface StudentUserInput extends PersonalUserInput {
	educationalInstituteName: string;
}
