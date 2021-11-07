import { average } from './functions';

describe('Average', () => {
	it('Should work', () => {
		expect(average('2', 2)).toEqual(`Average is 2`);
		expect(average(2, '2')).toEqual(`Average is 2`);
		expect(average(2, 2, 2)).toEqual(`Average is 2`);
	});
});
