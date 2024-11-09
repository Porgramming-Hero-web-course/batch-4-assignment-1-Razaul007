"use strict";
// Problem-6
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
const updatedProfile = updateProfile(myProfile, { age: 26 });
console.log(updatedProfile);
