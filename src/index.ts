// T extends U ? X: Y

// type nonUndefined<T> = T extends undefined | string ? never : T;
//
// type snbu = string | undefined | boolean | number;
//
// let v: nonUndefined<snbu> = 's'; //   boolean | number
//
interface IHydrantA {
	name: string;
	type: 'A';
}

// let a: Exclude<any, any>;
//
interface IHydrantB {
	name: string;
	type: 'B';
}

interface IHydrantC {
	name: string;
	type: 'C';
}
//
type Hydrant = IHydrantA | IHydrantB | IHydrantC;

type Arr = [() => IHydrantA, () => boolean];

type FirstTupleElReturnType<T extends [...any]> = T extends [infer U, ...unknown[]]
	? U extends (...args: unknown[]) => infer R
		? R
		: never
	: never;

const a: FirstTupleElReturnType<Arr[0]> = 1;

//
// function pressure(_h: Exclude<Hydrant, IHydrantB>) {}
//
// const h1: IHydrantC = {
// 	name: '1231asd',
// 	type: 'C',
// };
//
// pressure(h1);

// type Arr = [() => IHydrantA, () => boolean, () => string];
//
// type FirstTupleElReturnType<T> = T extends [infer U, ...unknown[]]
// 	? U extends (...args: unknown[]) => infer R
// 		? R
// 		: never
// 	: never;
//
// let v: FirstTupleElReturnType<Arr> = {
// 	name: 'sd123',
// 	type: 'A',
// };
//
// type FunctionParamsReturnType<T extends Function> = T extends (
// 	...args: [infer U, infer Y]
// ) => infer R
// 	? U | Y | R
// 	: never;
// type OnlyNonFunction<T> = T extends Function ? never : T;
//
// type FunctionParamsReturnType<T extends Function> = T extends (...args: infer Args) => infer R
// 	? OnlyNonFunction<Args[Exclude<keyof Args, 'length'>]> | R
// 	: never;

/*
   1) is Function
   2) Args = [number,string, string ]
   3) keyof Array 0,1,2 pop, push...., length(delete)
   4) Array<keyof Array>  ()=>{}, ()=>
   5) 0, 1,2,3.. length
 */

// function fn1(_a: string) {
// 	return 's';
// }
//
// function fn2(_a: number, _b: string) {
// 	return 1;
// }
//
// function fn3(_a: number, _b: string, _c: string) {
// 	return true;
// }
//
// let v1: FunctionParamsReturnType<typeof fn3> = () => 1;
