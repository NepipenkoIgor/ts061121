type TypedObject<T, U> = {
	[P in keyof T as `${U & string}${P & string}`]: T[P];
};

const createSimpleReducers = <T extends string>(name: T) => {
	const obj = {
		Pending: () => {
			return 1;
		},
		Success: () => {
			return 's';
		},
		Error: () => {
			return true;
		},
	};
	const result: { [key: string]: Function } = {};
	for (const [key, value] of Object.entries(obj)) {
		result[`${name}${key}`] = value;
	}
	return result as TypedObject<typeof obj, T>;
};

const v1: number = createSimpleReducers('userTable').userTablePending();
