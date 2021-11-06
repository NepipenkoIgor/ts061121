// function sum(a: number, b: number) {
// 	return a + b;
// }
//
//
// sum(1,2);
// sum(12122, 121)

// interface/type/function/class
// interface IMale {
// 	male: boolean;
// }
//
// interface IPerson<Info extends IMale = IMale, Id = string> {
// 	id: Id;
// 	name: string;
// 	info: Info;
// }

// interface IUser {
// 	id: string;
// 	name: string;
// }
//
// interface IAdmin {
// 	id: number;
// 	name: string;
// }

// const u: IPerson = {
// 	id: '123asd',
// 	name: 'Ihor',
// 	info: { male: true },
// };
//
// const adm: IPerson<{ subject: string[] } & IMale, number> = {
// 	id: 1,
// 	name: 'Ihor',
// 	info: {
// 		male: true,
// 		subject: ['ts', 'js'],
// 	},
// };

interface IUser {
	name: string;
	age: number;
}

interface IProduct {
	name: string;
	price: number;
}

interface IState {
	user: IUser;
	products: IProduct[];
	bonuses: number;
}

// let b: IState['user'] = //IUser

type Select<S> = <F extends keyof S>(state: S, field: F) => S[F];

//F => 'user' | 'products' | 'bonuses'

const state: IState = {
	user: { name: 'Ihor', age: 35 },
	products: [
		{ name: 'IPhone X', price: 10 },
		{ name: 'IPad', price: 11 },
	],
	bonuses: 0.8,
};

const select: Select<IState> = (storeState, stateField) => storeState[stateField];

const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
