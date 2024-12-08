const profile = {
    name: "Alison M",
    age: 30,
    address: {
        city: "New York",
        zipcode: "10001"
    }
};

const updates = {
    age: 31,
    address: {
        zipcode: "10002",
        country: "USA"
    }
};

const mergedProfile = {
    ...profile,
    ...updates,
    address: {
        ...profile.address,
        ...updates.address
    }
};

console.log(mergedProfile);

