const _items = new WeakMap();
class Stack {
	constructor() {
		_items.set(this,[]);
	}
	push(obj) {
		_items.get(this).push(obj);
	}
	pop() {
		const items = _items.get(this);
		if (items.length === 0) throw new Error('Stack is empty.');
		return items.pop();
	}
	peek() {
		const items = _items.get(this);
		if (items.length === 0) throw new Error('Stack is empty.');
		// return items.slice(-1)[0];		
		return items[items.length - 1];		
	}
	get count() {
		return _items.get(this).length;
	}
}

const stack = new Stack();