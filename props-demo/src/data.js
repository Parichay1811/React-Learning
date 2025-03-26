const people = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    photo: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i + 1}.jpg`,
    name: `Person ${i + 1}`,
    age: Math.floor(Math.random() * 43) + 18, // Random age between 18 and 60
    occupation: [
      "Software Engineer",
      "Doctor",
      "Architect",
      "Graphic Designer",
      "Teacher",
      "Accountant",
      "Nurse",
      "Chef",
      "Photographer",
      "Marketing Manager",
      "Artist",
      "Financial Analyst",
      "Musician",
      "Lawyer",
      "Writer",
      "Mechanical Engineer",
      "Data Scientist",
      "Electrician",
      "Police Officer",
      "Pharmacist"
    ][Math.floor(Math.random() * 20)] // Random occupation
  }));
  
  export default people;
  