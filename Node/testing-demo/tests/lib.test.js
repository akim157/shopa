const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

describe('absolute', () => {
	it('shuld return a positive number if inpout is positive', () => {
		const result = lib.absolute(1);
		expect(result).toBe(1);
	});

	it('shuld return a positive number if inpout is negative', () => {
		const result = lib.absolute(-1);
		expect(result).toBe(1);
	});

	it('shuld return 0 if inpout is 0', () => {
		const result = lib.absolute(0);
		expect(result).toBe(0);
	});
});

describe('greet', () => {
	it('should return the greeting message', () => {
		const result = lib.greet('Maxim');
		expect(result).toMatch(/Maxim/);
		expect(result).toContain('Maxim');

	});
});

describe('getCurrencies', () => {
	it('should return supported currencies', () => {
		const result = lib.getCurrencies();
		// Too general
		expect(result).toBeDefined();
		expect(result).not.toBeNull();
		// Too specific
		expect(result[0]).toBe('USD');
		expect(result[1]).toBe('AUD');
		expect(result[2]).toBe('EUR');
		expect(result.length).toBe(3);
		// Proper way
		expect(result).toContain('USD');
		expect(result).toContain('AUD');
		expect(result).toContain('EUR');
		// Ideal way
		expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
	});
});

describe('getProduct', () => {
	it('should return the product eith the given id', () => {
		const result = lib.getProduct(1);
		expect(result).toEqual({ id: 1, price: 10 });
		expect(result).toMatchObject({ id: 1, price: 10 });
		expect(result).toHaveProperty('id', '1');
	});
});

describe('registerUser', () => {
	it('should throw if username is falsy', () => {
		// Null
		// undefined
		// NaN
		// ''
		// 0
		// false				
		const args = [null, undefined, NaN, '', 0, false];
		args.forEach(a => {
			expect(() => { lib.registerUser(a) }).toThrow();
		});
	});

	it('should return a user object if valid username is passed', () => {
		const result = lib.registerUser('maxim');
		expect(result).toMatchObject({ username: 'maxim' });
		expect(result.id).toBeGreaterThan(0);
	});
});

describe('applyDiscount', () => {
	it('should apply 10% discount if customer has more than 10 points', () => {
		db.getCustomerSync = function (customerId) {
			console.log('Fake reading customer...');
			return { id: customerId, points: 20 };
		}
		const order = { customerId: 1, totalPrice: 10 };
		lib.applyDiscount(order);
		expect(order.totalPrice).toBe(9);
	});
});

describe('notifyCustomer', () => {
	it('should send an email to the customer', () => {
		db.getCustomerSync = jest.fn().mockRejectedValue({ email: 'a' });

		mail.send = jest.fn();

		// const mockFucnction = jest.fn();
		// // mockFucnction.mockReturnValue(1);
		// // mockFucnction.mockResolvedValue(1);
		// mockFucnction.mockRejectedValue(new Error('...'));
		// const result = mockFucnction();

		// db.getCustomerSync = function (customerId) {
		// 	return { email: 'a' }
		// }

		// let mailSent = false;
		// mail.send = function (email, message) {
		// 	mailSent = true;
		// }

		lib.notifyCustomer({ customerId: 1 });

		// expect(mail.send).toHaveBeenCalled();
		expect(mail.send.mock.calls[0][0]).toBe('a');
		expect(mail.send.mock.calls[0][1]).toMatch(/order/);
		// expect(mail.send).toHaveBeenCalledWith('a', '...');
	});
});