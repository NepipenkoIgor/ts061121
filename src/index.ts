interface IPoint {
	x: number;

	sum(): number;
}

type Constructable = new (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public timestamped = Date.now();

		public constructor(...a: any[]) {
			super(...a);
		}
	};
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
	return class extends BC {
		public timestamped = 1111;

		public tags = ['ts', 'js'];
	};
}

class BasePoint implements IPoint {
	// public  x: number = 1;
	//
	// public y: number;

	// public constructor(y: string);
	// public constructor(y: number);
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	#p = 10;

	public constructor(
		public readonly x: number,
		protected readonly y: number,
		private readonly z: number,
	) {
		//this.y = +y;
	}

	public sum() {
		return this.x + this.y + this.z + this.#p;
	}
}

class Point extends Tagged(Timestamped(BasePoint)) {
	public constructor(x: number, y: number, z: number) {
		super(x, y, z);
	}

	public override sum(): number {
		return super.sum();
	}
}

const p = new Point(1, 1, 1);
console.log(p.timestamped);
console.log(p.tags);

// class Singleton {
// 	private static instance: Singleton;
//
// 	private constructor() {}
//
// 	public static getInstance(): Singleton {
// 		if (!Singleton.instance) {
// 			Singleton.instance = new Singleton();
// 		}
// 		return Singleton.instance;
// 	}
// }

// class Singleton {
// 	private static instance: Singleton;
//
// 	static {
// 		console.log('before init once');
// 		if (!Singleton.instance) {
// 			Singleton.instance = new Singleton();
// 		}
// 	}
//
// 	public constructor() {
// 		console.log(' init ');
// 		return Singleton.instance;
// 	}
// }
//
// const inst = new Singleton();
// const inst1 = new Singleton();
// const inst2 = new Singleton();
// const inst3 = new Singleton();
// const inst4 = new Singleton();
//
// console.log(inst1 === inst4);

abstract class AbstractControl<T = string> {
	public abstract model: T;

	public abstract getModel(): T;

	public onFocus() {}

	public onBlur() {}
}

abstract class AbstractControlWithSetter<T = string> extends AbstractControl<T> {
	public abstract setModel(model: T): void;
}

class MHSearch extends AbstractControl {
	public model = '';

	public override getModel(): string {
		return '';
	}
}

interface IDropDownItem {
	text: string;
	value: string;
}

class MHDropDown extends AbstractControlWithSetter<IDropDownItem[]> {
	public model: IDropDownItem[] = [];

	public override getModel(): IDropDownItem[] {
		return [];
	}

	public override setModel(model: IDropDownItem[]) {
		this.model = model;
	}
}
