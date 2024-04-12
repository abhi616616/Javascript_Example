console.log('Before setImmediate');

setImmediate((arg1, arg2) => {
    console.log('Inside setImmediate callback:', arg1, arg2);
}, 'argument1', 'argument2');

console.log('After setImmediate');