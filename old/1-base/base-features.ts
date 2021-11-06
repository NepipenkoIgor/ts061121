// import '../assets/css/style.css';

/* let/const */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let period = 10;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseUrl = 'http://localhost';

/* object */
let firstName = 'Ihor';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let acc = {
	firstName,
	getName() {
		return this.firstName;
	},
};

/* spread */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const person = { ...acc };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dates = [...[11, 12, 14]];

/* dustructoring  */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let { firstName: myName } = acc;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [firstDate] = dates;

/* template str/ tag function */

// eslint-disable-next-line @typescript-eslint/no-shadow
function userMessage([start, end]: TemplateStringsArray, { firstName }: typeof person) {
	return `${start}${firstName}${end}`;
}

console.log(userMessage`Good day, ${person} !!!`);

/* for of*/
for (const d of dates) {
	console.log(d);
}

/* arrow */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sum = (a: number, b: number) => a + b;

/* class */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Point {
	public x = 1;

	public y = 1;

	public sum() {
		return this.x + this.y;
	}
}

/* optional chaining*/
const user: any = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let x = user?.info?.x;

/* ?? */
let admin;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let p = admin ?? user;
