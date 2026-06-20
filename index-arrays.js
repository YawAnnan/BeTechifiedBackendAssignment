
//Array of objects

const students = [
    {
        name : "John Doe",
        age : 20,
        grade : "A",
        subjects : ["Math", "Science", "History"],
    },
    {
        name : "Jane Smith",
        age : 22,
        grade : "B",
        subjects : ["English", "History", "Art"],   
    },
    {
        name : "Alice Johnson",
        age : 21,
        grade : "A",
        subjects : ["French", "History", "Art"],   
    }
];

console.log(students);


//Array of objects with nested objects

const studentsWithDetails = [   
    {
        name : "John Doe",
        age : 20,
        grade : "A",
        subjects : ["Math", "Science", "History"],
        address : {
            street : "123 Main St",
            city : "New York",
            state : "NY"
        }
    },
    {
        name : "Jane Smith",
        age : 22,
        grade : "B",
        subjects : ["English", "History", "Art"],
        address : {
            street : "456 Oak Ave",
            city : "Los Angeles",
            state : "CA"
        }
    },
    {
        name : "Alice Johnson",
        age : 21,
        grade : "A",
        subjects : ["French", "History", "Art"],
        address : {
            street : "789 Pine Rd",
            city : "Chicago",
            state : "IL"
        }
    }
];
console.log(studentsWithDetails);