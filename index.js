const array = [];

function load() {
  document.getElementById("body").innerHTML = ''; // Clear existing content
  array.forEach((student, index) => {
    renderStudent(student, index);
  });
}

function renderStudent(student, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  ${(student.gender == "male") ? '<img src="/assets145867.png"/>' : '<img src="/assets186037.png"/>'}
    <h1>Name: ${student.name}</h1>
    <h1>Gender: ${student.gender}</h1>
    <h1>DOB: ${student.dob}</h1>
    <h1>Address: ${student.address}</h1>
    <h1>Contact: ${student.contact}</h1>
    <button onclick="removeStudent(${index})">Delete</button>
  `;
  document.getElementById("body").appendChild(card);
}

function addStudent() {
  const newStudent = {
    name: document.getElementById("name").value,
    gender: document.getElementById("gender").value,
    dob: document.getElementById("dob").value,
    address: document.getElementById("address").value,
    contact: document.getElementById("contact").value
  };

  array.push(newStudent);
  renderStudent(newStudent, array.length - 1); // Render the newly added student
  console.log(array);
}

function removeStudent(index) {
  array.splice(index, 1); // Remove student from array
  load(); // Re-render the updated array
}

window.onload = function () {
  load();
};