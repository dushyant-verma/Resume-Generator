function addNewWEField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 5);
  newNode.setAttribute("placeholder", "Enter your Work Experience");
  let WorkExp = document.getElementById("we");
  let weAddButton = document.getElementById("weAddButton");

  WorkExp.insertBefore(newNode, weAddButton);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 5);
  newNode.setAttribute("placeholder", "Enter your Academic Qualification");

  let AcdExp = document.getElementById("AcExp");
  let aqAddButton = document.getElementById("aqAddButton");
  AcdExp.insertBefore(newNode, aqAddButton);
}

// genrating resume

function generateCV() {
  // console.log("Generating cv");
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT");
  nameT1.innerHTML = nameField;

  // direct

  document.getElementById("nameT2").innerHTML = nameField;

  //  Contacts

  document.getElementById("phoneT").innerHTML =
    document.getElementById("phoneField").value;

  // Address

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  document.getElementById("gitT").innerHTML =
    document.getElementById("gitField").value;
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedinField").value;
  document.getElementById("vercelT").innerHTML =
    document.getElementById("portField").value;

  //  Going to set Objective in javascript

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // Work Experience field

  let workExperiences = document.getElementsByClassName("weField");

  let str = "";

  for (let e of workExperiences) {
    str = str + `<li>${e.value}</li>`;
  }

  document.getElementById("weT").innerHTML = str;

  // For academic qualification

  let academicQual = document.getElementsByClassName("eqField");

  let str1 = "";
  for (let e of academicQual) {
    str1 = str1 + `<li>${e.value}</li>`;
    document.getElementById("aqT").innerHTML = str1;
  }

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

  // code for setting image



  
}

function printCv() {
  window.print();
}
