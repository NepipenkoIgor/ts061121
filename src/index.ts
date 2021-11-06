// interface IUserAccount {
// 	firstName: string;
// 	age: number;
// }
// //
// // const user = UserAccount;
//
// const userAccount = {
// 	firstName: 'Ihor',
// 	age: 35,
// };
// //
//  const user: typeof userAccount = IUserAccount;

// class Point {
// 	public x = 1;
//
// 	public y = 1;
// }
//
// const p: Point = new Point();

// let int: number = 1;
// int = NaN;
// int = 0x0101;
// // int = null;
// // int = undefined;
//
// let str: string = 's';
// str = `${int}`;
//
// let bool: boolean = true;
// bool = false;
//
// let nil: null = null;
// let und: undefined = undefined;
//
// let bInt: bigint = 3n;
//
// const key1: symbol = Symbol('key1');
// const key2 = Symbol('key1');
// const key3: unique symbol = Symbol('key3');
//
// let strictObject = {
// 	[key1]: 100,
// 	[key2]: 101,
// 	[key3]: 101,
// 	[Symbol.iterator]: {
// 		next() {},
// 	},
// };
//
// const v = strictObject[key1];

// let int: 1 | 2 | 3 | 4 | 5 = 6;
//
// enum Animations {
// 	EASE_IN = 'ease-in',
// 	EASE_OUT = 'ease-out',
// }

// type AnimationType = 'ease' | 'fade';
// type AnimationDirection = 'in' | 'out';
/*
interface IAniamtionConfig {
	delay: number;
	easing: `${AnimationType}-${AnimationDirection}`;
}

function animate(_options: IAniamtionConfig) {
	if (_options.easing === 'ease-in') {
	}
}

animate({ delay: 1000, easing: Animations.EASE_OUT });*/

// let values= Object.keys(Animations)

interface IFact {
	factId: number;
	userId: string;
}

const dataList: { action: string; data: IFact }[] = [];

const uniqValue = (): keyof IFact => {
	// 'factId' | 'userId'
	return 'factId';
};

dataList.map((item) => {
	if (item.data[uniqValue()] === 2) {
		//....
	}
	return item;
});
//
// let v: IFact[keyof IFact] = 's'; // number | string
//
// let v = Object.keys(Animations).map((item: string) => {
// 	return Animations[item as keyof typeof Animations];
// });
