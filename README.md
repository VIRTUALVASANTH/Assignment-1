# JavaScript `Object` Methods — Static & Prototype Demonstrations

This package contains two runnable JS demos and documentation showing static Object methods and prototype methods. Run each with node as shown below.

## Run Commands

```bash
node static-methods-demo.js
node prototype-methods-demo.js
```

## File Descriptions

### static-methods-demo.js
Demonstrates all major `Object` static methods with clear examples and outputs.

**Methods Demonstrated:**
- Object.assign, Object.create, Object.defineProperty, Object.defineProperties
- Object.entries, Object.fromEntries, Object.freeze, Object.getOwnPropertyDescriptor
- Object.getOwnPropertyDescriptors, Object.getOwnPropertyNames, Object.getOwnPropertySymbols
- Object.getPrototypeOf, Object.setPrototypeOf, Object.hasOwn, Object.is
- Object.isExtensible, Object.isFrozen, Object.isSealed, Object.keys
- Object.preventExtensions, Object.seal, Object.values

**Example Command:**
```bash
node static-methods-demo.js
```

**Expected Key Console Lines:**
```
=== JAVASCRIPT OBJECT STATIC METHODS DEMONSTRATION ===

--- Object.assign - Copy properties from source objects to target ---
Target after assign: { a: 1, b: 2, c: 3, d: 4 }
Result: { a: 1, b: 2, c: 3, d: 4 }
Target === Result: true

--- Object.create - Create object with specified prototype ---
John object: { name: 'John' }
John greeting: Hello, I'm John
Prototype check: true

--- Object.freeze - Make object immutable ---
Before freeze: { x: 1, y: 2 }
Is frozen: true
After attempted modification: { x: 1, y: 2 }

--- Object.is - Strict equality comparison ---
Object.is(NaN, NaN): true
NaN === NaN: false
Object.is(+0, -0): false
+0 === -0: true

=== END STATIC DEMO ===
```

### prototype-methods-demo.js
Demonstrates `Object.prototype` methods and prototype chain behavior.

**Methods Demonstrated:**
- constructor property, hasOwnProperty vs inherited properties
- isPrototypeOf, propertyIsEnumerable, toLocaleString
- toString (default and overridden), valueOf (overridden)
- Legacy __proto__ (with modern alternatives)

**Example Command:**
```bash
node prototype-methods-demo.js
```

**Expected Key Console Lines:**
```
=== JAVASCRIPT OBJECT PROTOTYPE METHODS DEMONSTRATION ===

--- constructor property - Show instance.constructor === FunctionName ---
Person instance: Person { name: 'John' }
person.constructor === Person: true
person.constructor.name: Person

--- hasOwnProperty vs inherited property - Show own vs prototype properties ---
cat.hasOwnProperty("name"): true
cat.hasOwnProperty("species"): false
cat.hasOwnProperty("makeSound"): false
cat.species: Unknown
cat.makeSound(): Some sound

--- toString - Default and overridden toString ---
Default object toString: [object Object]
Custom toString: Product: Laptop - $999
String concatenation: Item: Product: Laptop - $999

--- valueOf - Override to produce primitive and show behavior ---
Counter valueOf(): 5
Counter in arithmetic: 15
Counter in comparison: true
Counter in string context: Count: Counter(5)

=== END PROTOTYPE DEMO ===
```

## Trainer Checklist

**Static Methods Demo:**
- [ ] Object.assign - copies properties from source objects to target
- [ ] Object.create - creates new object with specified prototype
- [ ] Object.defineProperty - defines single property with descriptors
- [ ] Object.defineProperties - defines multiple properties at once
- [ ] Object.entries - returns array of key-value pairs
- [ ] Object.fromEntries - creates object from key-value pairs
- [ ] Object.freeze - makes object immutable
- [ ] Object.getOwnPropertyDescriptor - gets property descriptor
- [ ] Object.getOwnPropertyDescriptors - gets all property descriptors
- [ ] Object.getOwnPropertyNames - gets all own property names
- [ ] Object.getOwnPropertySymbols - gets symbol properties
- [ ] Object.getPrototypeOf - gets object's prototype
- [ ] Object.setPrototypeOf - sets object's prototype (with caution warning)
- [ ] Object.hasOwn - checks if object has own property
- [ ] Object.is - strict equality comparison
- [ ] Object.isExtensible - checks if object can be extended
- [ ] Object.isFrozen - checks if object is frozen
- [ ] Object.isSealed - checks if object is sealed
- [ ] Object.keys - gets enumerable own property names
- [ ] Object.preventExtensions - prevents adding new properties
- [ ] Object.seal - prevents adding/removing properties
- [ ] Object.values - gets array of property values

**Prototype Methods Demo:**
- [ ] constructor property - shows instance.constructor === FunctionName
- [ ] hasOwnProperty vs inherited property - demonstrates own vs prototype properties
- [ ] isPrototypeOf - shows prototype chain check
- [ ] propertyIsEnumerable - shows enumerability behavior
- [ ] toLocaleString - brief invocation demonstration
- [ ] toString - default and overridden toString
- [ ] valueOf - override to produce primitive and show behavior
- [ ] Legacy __proto__ - briefly shown with modern alternatives

## Notes & Caveats

- **Object.hasOwn**: Available in ES2022+. For older Node versions, use `Object.prototype.hasOwnProperty.call(obj, prop)` as fallback.
- **Freeze/Seal/PreventExtensions**: These operations are shallow - nested objects remain mutable.
- **__proto__**: Legacy property access. Prefer `Object.getPrototypeOf()` and `Object.setPrototypeOf()` for modern code.
- **Symbol Properties**: Symbol-keyed properties are not included in `Object.keys()` but appear in `Object.getOwnPropertySymbols()`.
- **Strict Mode**: Some operations (like modifying frozen objects) will throw errors in strict mode.

## ExpectedOutputs.txt

**Key Console Outputs for Verification:**

Static Methods Demo:
```
Target after assign: { a: 1, b: 2, c: 3, d: 4 }
John greeting: Hello, I'm John
Is frozen: true
Object.is(NaN, NaN): true
NaN === NaN: false
Symbol properties: [ Symbol(symbol1) ]
Regular keys (no symbols): [ 'regular' ]
user has own name: true
user has own toString: false
User keys: [ 'name', 'age', 'city' ]
User values: [ 'Alice', 30, 'NYC' ]
```

Prototype Methods Demo:
```
person.constructor === Person: true
cat.hasOwnProperty("name"): true
cat.hasOwnProperty("species"): false
animalProto.isPrototypeOf(cat): true
enumerableProp is enumerable: true
nonEnumerableProp is enumerable: false
Custom toString: Product: Laptop - $999
Counter in arithmetic: 15
Counter in comparison: true
Legacy __proto__ access: true
Modern getPrototypeOf: true
```

## Pandoc Commands for Document Generation

To generate alternative document formats:

```bash
# Generate DOCX
pandoc README.md -o README.docx

# Generate PDF
pandoc README.md -o README.pdf
```

**Note**: Ensure Pandoc is installed on your system for document conversion.
