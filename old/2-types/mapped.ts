const key = Symbol('key');
interface IPerson {
	readonly name: string;
	readonly age: number;
	info: {
		male: boolean;
		salary: {
			amount: number;
		};
	};
	subjects?: string[];
}

type NotReadonlyOptional<T> = {
	-readonly [P in keyof T]?: T[P];
};

function fnUpdate(_p: Partial<IPerson>) {}

fnUpdate({ age: 20 });

type ReadonlyRec<T> = {
	readonly [P in keyof T]?: ReadonlyRec<T[P]>;
};

let p: ReadonlyRec<IPerson> = {
	name: 'Ihor',
	age: 35,
	info: {
		male: true,
		salary: {
			amount: 3000,
		},
	},
	subjects: ['ts'],
};

p.age = 20;

p.info.male = false;

p.info.salary.amount = 10000;

type RemoveKeyByValueTypeAndUnion<T, E> = {
	[P in keyof T]-?: T[P] extends E ? never : P;
}[keyof T];

/*
 *  name: never
 *  age: 'age'
 * info: 'info'
 * subjects: 'subjects'
 *
 *   'age' | 'info' | 'subjects'
 * **/

type RemoveByFieldName<T, E> = {
	[P in keyof T as Exclude<P, E>]: T[P];
};

const v: RemoveKeyByValueTypeAndUnion<IPerson, string | IPerson['info'] | string[]> = 'subject';

const p11: RemoveByFieldName<NotReadonlyOptional<IPerson>, 'info' | 'subjects'> = {
	name: 'Ihor',
	age: 35,
};

type CapitalizedKeysAndGetter<T> = {
	[P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

const getPerson: CapitalizedKeysAndGetter<IPerson> = {
	getName: () => 'Ihor',
	getAge: () => 35,
	getInfo: () => ({
		male: true,
		salary: {
			amount: 1000,
		},
	}),
};
