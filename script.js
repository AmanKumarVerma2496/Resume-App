//alert("Hello! I am an alert box!!");
function addNewEQualifiactionField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("edField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute(
    "placeholder",
    "Enter Qualification in Highest to Lowest order"
  );
  let eqOb = document.getElementById("eq");
  let weAddButtonOb = document.getElementById("weAddButton");
  eqOb.insertBefore(newNode, weAddButtonOb);
}
function addNewWExperienceField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wetField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Your Work Experience If Any");
  let weOb = document.getElementById("we");
  let weAddButtonOneOb = document.getElementById("weAddButtonOne");
  weOb.insertBefore(newNode, weAddButtonOneOb);
}
function addNewAprojects() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("apField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter Academic projects here in detail");
  let apOb = document.getElementById("ap");
  let weAddButtontwoOb = document.getElementById("weAddButtontwo");
  apOb.insertBefore(newNode, weAddButtontwoOb);
}
function addNewPprojects() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("ppField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Your Key Development Projects");
  let ppOb = document.getElementById("pp");
  let weAddButtonthreeOb = document.getElementById("weAddButtonthree");
  ppOb.insertBefore(newNode, weAddButtonthreeOb);
}
function addNewCertifications() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wettField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter training certification details");
  let ctOb = document.getElementById("ct");
  let weAddButtonfourOb = document.getElementById("weAddButtonfour");
  ctOb.insertBefore(newNode, weAddButtonfourOb);
}
function addNewTechskill() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("ttField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Tech languages details");
  let ppeOb = document.getElementById("ppe");
  let weAddButtonfiveOb = document.getElementById("weAddButtonfive");
  ppeOb.insertBefore(newNode, weAddButtonfiveOb);
}
function addNewSummaryField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("webField");
  newNode.classList.add("mt-2");
  newNode.classList.add("no-bullets");
  newNode.setAttribute("rows", 4);
  newNode.setAttribute("placeholder", "Enter Summary in detail");
  let Sum1Ob = document.getElementById("Sum1");
  let weAddButtonsixOb = document.getElementById("weAddButtonsix");
  Sum1Ob.insertBefore(newNode, weAddButtonsixOb);
}
// generating Resume
function GenerateResume() {
  //console.log("generating resume");
  let namefield = document.getElementById("namefield").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = namefield;

  // direct
  document.getElementById("nameT2").innerHTML = namefield;
  //phone number
  // document.getElementById('Sum1').innerHTML=document.getElementById("Sum1").value;
  //emailaddress
  document.getElementById("emailT").innerHTML =
    document.getElementById("contactfield11").value;
  //phone number
  document.getElementById("ContactT").innerHTML =
    document.getElementById("contactfield").value;
  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressfield").value;
  // for links
  document.getElementById("liT").innerHTML =
    document.getElementById("linkedinfield").value;
  document.getElementById("haT").innerHTML =
    document.getElementById("hackerrankfield").value;
  document.getElementById("LeT").innerHTML =
    document.getElementById("leetcodefield").value;
  document.getElementById("giT").innerHTML =
    document.getElementById("gitfield").value;
  // for education dept
  let eqs = document.getElementsByClassName("edField");

  let str = "";

  for (let e of eqs) {
    str = str + `<li>${e.value}</li>`;
  }

  document.getElementById("eqT").innerHTML = str;
  //work experience field

  let wes = document.getElementsByClassName("wetField");

  let str1 = "";

  for (let e of wes) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str1;
  //academic projects
  let aes = document.getElementsByClassName("apField");

  let str2 = "";

  for (let e of aes) {
    str2 += `<li> ${e.value} </li>`;
  }

  document.getElementById("apT").innerHTML = str2;
  // professional projects
  let pes = document.getElementsByClassName("ppField");

  let str3 = "";

  for (let e of pes) {
    str3 += `<li> ${e.value} </li>`;
  }

  document.getElementById("ppT").innerHTML = str3;

  // certifications
  let pesee = document.getElementsByClassName("wettField");

  let str4 = "";

  for (let e of pesee) {
    str4 += `<li> ${e.value} </li>`;
  }

  document.getElementById("ceT").innerHTML = str4;
  //technical skills
  let tes = document.getElementsByClassName("ttField");

  let str5 = "";

  for (let e of tes) {
    str5 += `<li> ${e.value} </li>`;
  }

  document.getElementById("tsT").innerHTML = str5;
  // Summary things
  let sum = document.getElementsByClassName("webField");
  let str6 = "";

  for (let e of sum) {
    str6 += `<li>${e.value}</li>`;
  }

  let alignmentOption = "justify"; // Specify the desired alignment option ("center", "right", "justify")

  document.getElementById(
    "Sum1T"
  ).innerHTML = `<ul class="no-bullets align-${alignmentOption}">${str6}</ul>`;

  // this code is for setting image
  let file = document.getElementById("imgField").files[0];
  console.log(file);
  var reader = new FileReader();

  console.log(reader.result);
  // set the img to template
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
  if (file instanceof Blob) {
    // `file` is a valid Blob object, proceed with `readAsDataURL`
    reader.readAsDataURL(file);
  }
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//print cv
function printCV() {
  window.print();
}
