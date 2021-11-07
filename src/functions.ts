// function average(a: number, b: number, c: number): string {
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

// function average(a: number, b?: number, c?: number): string {
// 	if (b === undefined) {
// 		b = 0;
// 	}
// 	if (c === undefined) {
// 		c = 0;
// 	}
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

// function average(a: number, b: number = 0, c: number = 0): string {
// 	const avg: number = (a + b + c) / 3;
// 	return `Average is ${avg}`;
// }

// function isString(arg: number | string): arg is string {
// 	return typeof arg === 'string';
// }
//
// function average(a: string, b: number): string;
// function average(a: number, b: string): string;
// function average(a: number, b: number, c: number): string;
// function average(...args: (number | string)[]): string {
// 	let total: number = 0;
// 	for (const arg of args) {
// 		//const isString = typeof arg === 'string';
// 		if (isString(arg)) {
// 			total += Number(arg);
// 			continue;
// 		}
// 		total += arg;
// 	}
// 	const avg: number = total / args.length;
// 	return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 1, 2, 3);
// average(1, 2, 2, 22);
// average(1, 2, 2, 2, 2, 2, 3);
// average(1, '2', 1);
// average(1, '2');
// average('1', 2);
// average(1, 2, 2);
// const r: number = average(1, 1, 1);
//
// let user: { name: string } | null = null;
//
// function test(show: true): { test: number; value: () => string };
// function test(show: false): { test: number };
// function test(show: boolean): { test: number; value?: () => string } {
// 	if (show) {
// 		return {
// 			test: 1,
// 			value: () => 'sss',
// 		};
// 	}
// 	return {
// 		test: 1,
// 	};
// }
//
// test(true).value();
// test(false);

function getFullName(this: { name: string; age: number }) {
	return `${this.name}`;
}

let account = {
	name: 'Ihor',
	age: 35,
	getFullName,
};

account.getFullName();

document.addEventListener<'click'>('click', this.getFullName.bind(account));
