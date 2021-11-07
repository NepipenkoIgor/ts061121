type RequiredOrOmit<T, U, Z extends keyof U> = T extends true ? Required<U> : Omit<U, Z>;

function test<T extends boolean>(show: T) {
	type Result = RequiredOrOmit<T, { test: number; value?: () => string }, 'value'>;

	if (show) {
		return {
			test: 1,
			value: () => 'sss',
		} as Result;
	}
	return {
		test: 1,
	} as Result;
}

test(true).value();
test(false).value();
