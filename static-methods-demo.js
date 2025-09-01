// Run: node static-methods-demo.js

console.log('=== JAVASCRIPT OBJECT STATIC METHODS DEMONSTRATION ===\n');

// Object.assign - copies properties from source objects to target object
console.log('--- Object.assign - Copy properties from source objects to target ---');
const target = { a: 1 };
const source1 = { b: 2, c: 3 };
const source2 = { d: 4 };
const result = Object.assign(target, source1, source2);
console.log('Target after assign:', target);
console.log('Result:', result);
console.log('Target === Result:', target === result); // true - modifies original

// Object.create - creates new object with specified prototype
console.log('\n--- Object.create - Create object with specified prototype ---');
const personProto = { greet() { return `Hello, I'm ${this.name}`; } };
const john = Object.create(personProto, { name: { value: 'John', writable: true } });
console.log('John object:', john);
console.log('John greeting:', john.greet());
console.log('Prototype check:', Object.getPrototypeOf(john) === personProto);

// Object.defineProperty - define single property with descriptors
console.log('\n--- Object.defineProperty - Define single property with descriptors ---');
const obj1 = {};
Object.defineProperty(obj1, 'readOnly', { value: 42, writable: false, enumerable: true });
console.log('Object with readOnly property:', obj1);
console.log('readOnly value:', obj1.readOnly);
// obj1.readOnly = 100; // Would throw error in strict mode

// Object.defineProperties - define multiple properties at once
console.log('\n--- Object.defineProperties - Define multiple properties ---');
const obj2 = {};
Object.defineProperties(obj2, {
  prop1: { value: 'value1', writable: true, enumerable: true },
  prop2: { value: 'value2', writable: false, enumerable: false }
});
console.log('Object with multiple properties:', obj2);
console.log('Enumerable properties:', Object.keys(obj2));

// Object.entries - returns array of key-value pairs
console.log('\n--- Object.entries - Get array of key-value pairs ---');
const user = { name: 'Alice', age: 30, city: 'NYC' };
const entries = Object.entries(user);
console.log('Object entries:', entries);
console.log('Iterating entries:');
entries.forEach(([key, value]) => console.log(`  ${key}: ${value}`));

// Object.fromEntries - creates object from key-value pairs
console.log('\n--- Object.fromEntries - Create object from entries ---');
const pairs = [['a', 1], ['b', 2], ['c', 3]];
const newObj = Object.fromEntries(pairs);
console.log('From entries:', newObj);

// Object.freeze - makes object immutable
console.log('\n--- Object.freeze - Make object immutable ---');
const frozen = { x: 1, y: 2 };
Object.freeze(frozen);
console.log('Before freeze:', frozen);
console.log('Is frozen:', Object.isFrozen(frozen));
// frozen.x = 10; // Would throw error in strict mode
console.log('After attempted modification:', frozen);

// Object.getOwnPropertyDescriptor - get property descriptor
console.log('\n--- Object.getOwnPropertyDescriptor - Get property descriptor ---');
const descriptor = Object.getOwnPropertyDescriptor(obj1, 'readOnly');
console.log('Property descriptor:', descriptor);

// Object.getOwnPropertyDescriptors - get all property descriptors
console.log('\n--- Object.getOwnPropertyDescriptors - Get all property descriptors ---');
const allDescriptors = Object.getOwnPropertyDescriptors(obj2);
console.log('All property descriptors:', allDescriptors);

// Object.getOwnPropertyNames - get all own property names (including non-enumerable)
console.log('\n--- Object.getOwnPropertyNames - Get all own property names ---');
const allProps = Object.getOwnPropertyNames(obj2);
console.log('All property names:', allProps);

// Object.getOwnPropertySymbols - get symbol properties
console.log('\n--- Object.getOwnPropertySymbols - Get symbol properties ---');
const sym1 = Symbol('symbol1');
const sym2 = Symbol('symbol2');
const symbolObj = { [sym1]: 'symbol value', regular: 'regular value' };
console.log('Object with symbols:', symbolObj);
console.log('Symbol properties:', Object.getOwnPropertySymbols(symbolObj));
console.log('Regular keys (no symbols):', Object.keys(symbolObj));

// Object.getPrototypeOf - get object's prototype
console.log('\n--- Object.getPrototypeOf - Get object prototype ---');
const proto = Object.getPrototypeOf(john);
console.log('John\'s prototype:', proto);
console.log('Prototype is personProto:', proto === personProto);

// Object.setPrototypeOf - set object's prototype (use with caution)
console.log('\n--- Object.setPrototypeOf - Set object prototype (use with caution) ---');
const animal = { makeSound() { return 'Some sound'; } };
const dog = { name: 'Rex' };
Object.setPrototypeOf(dog, animal);
console.log('Dog after setting prototype:', dog);
console.log('Dog can make sound:', dog.makeSound());

// Object.hasOwn - check if object has own property (ES2022)
console.log('\n--- Object.hasOwn - Check if object has own property ---');
console.log('user has own name:', Object.hasOwn(user, 'name'));
console.log('user has own toString:', Object.hasOwn(user, 'toString')); // false - inherited

// Object.is - strict equality comparison
console.log('\n--- Object.is - Strict equality comparison ---');
console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN)); // true
console.log('NaN === NaN:', NaN === NaN); // false
console.log('Object.is(+0, -0):', Object.is(+0, -0)); // false
console.log('+0 === -0:', +0 === -0); // true

// Object.isExtensible - check if object can be extended
console.log('\n--- Object.isExtensible - Check if object can be extended ---');
const extensible = { a: 1 };
console.log('Is extensible:', Object.isExtensible(extensible));
Object.preventExtensions(extensible);
console.log('After preventExtensions:', Object.isExtensible(extensible));

// Object.isFrozen - check if object is frozen
console.log('\n--- Object.isFrozen - Check if object is frozen ---');
console.log('Is frozen object frozen:', Object.isFrozen(frozen));
console.log('Is regular object frozen:', Object.isFrozen(user));

// Object.isSealed - check if object is sealed
console.log('\n--- Object.isSealed - Check if object is sealed ---');
const sealed = { x: 1, y: 2 };
Object.seal(sealed);
console.log('Is sealed object sealed:', Object.isSealed(sealed));
console.log('Is regular object sealed:', Object.isSealed(user));

// Object.keys - get enumerable own property names
console.log('\n--- Object.keys - Get enumerable own property names ---');
const keys = Object.keys(user);
console.log('User keys:', keys);

// Object.preventExtensions - prevent adding new properties
console.log('\n--- Object.preventExtensions - Prevent adding new properties ---');
const preventObj = { existing: 'value' };
Object.preventExtensions(preventObj);
console.log('Can add property before preventExtensions:', !Object.isExtensible(preventObj));
// preventObj.newProp = 'new'; // Would throw error in strict mode

// Object.seal - prevent adding/removing properties (but allow modification)
console.log('\n--- Object.seal - Prevent adding/removing properties ---');
const sealObj = { x: 1, y: 2 };
Object.seal(sealObj);
console.log('Is sealed:', Object.isSealed(sealObj));
sealObj.x = 10; // This works
console.log('After modifying sealed object:', sealObj);
// delete sealObj.x; // Would throw error in strict mode

// Object.values - get array of own enumerable property values
console.log('\n--- Object.values - Get array of property values ---');
const values = Object.values(user);
console.log('User values:', values);

console.log('\n=== END STATIC DEMO ===');
