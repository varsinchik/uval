export interface IAdress {
	address: {
		country: string,
		city: string;
		street: string,
		house: string,
		zipcode: string
	}
}

export interface Idebtors {
	firstName: string,
	lastName: string,
	username: string,
	address: {
		city: string;
		street: string,
		house: string,
		zipcode: string
	}
}
