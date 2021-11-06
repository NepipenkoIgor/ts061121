// interface vs types alias

/* Object/Functions */

// interface IPoint {
// 	x: number;
// 	y: number;
// }
//
// type TPoint = {
// 	x: number;
// 	y: number;
// };
//
// let p: IPoint = {
// 	x: 1,
// 	y: 1,
// };
//
// interface ISum {
// 	(x: number, y: number): number;
// }
//
// type TSum = { (x: number, y: number): number };
type TSum = (x: number, y: number) => number;
//
const sum: TSum = (x: number, y: number) => {
	return x + y;
};

/*Extends*/

interface IX {
	x: number;
}

interface IY {
	y: number;
}

type TX = { x: number };
type TY = { y: number };

interface IPoint extends IX, TY {}

type TPoint = IX & TY;

let p: TPoint = {
	x: 1,
	y: 1,
};

/* implementation */

class Point implements TX, IY {
	public x = 1;

	public y = 2;

	public z = 2;
}

// type snb = string | number | boolean;
// type snb = string | number | boolean;

// interface IY {
// 	z: number;
// }
