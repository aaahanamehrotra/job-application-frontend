const inputname = document.querySelector("input#name")
const inputemail = document.querySelector("input#email")
const inputyear = document.querySelector("input#year")
const inputreason = document.querySelector("textarea#reason")
const inputexperience = document.querySelector("textarea#experience")
const inputdepartment = document.querySelector("select#department")

departments = ['Engineering', 'Sales', 'Marketing', 'Administration']
const nameValidation = (name) => (name !== "") ? true : "Name can't be empty";
const emailValidation = (email) => (email !== "") ? true : "Email can't be empty";
const yearValidation = (year) => (year >= 1990 && year <= 2025) ? true : "Invalid Year";
const reasonValidation = (reason) => (reason !== "") ? true : "Reason can't be empty";
const experienceValidation = (experience) => (experience !== "") ? true : "Experience can't be empty";
const deparatmentValidation = (department) => (departments.includes(department)) ? true : "Department can't be empty";

function onSubmit(x) {
	x.preventDefault();
	validations = [nameValidation(inputname.value), emailValidation(inputemail.value), yearValidation(inputyear.value), reasonValidation(inputreason.value), experienceValidation(inputexperience.value), deparatmentValidation(inputdepartment.value)];
	const allFieldsValid = validations.every((validation) => validation === true);
	if (!allFieldsValid){
		alert(validations.find((m) => typeof m === "string"));
		return;
	}
	alert(`Your Response: \n Name: ${inputname.value} \n Email: ${inputemail.value} \n Year of Graduation: ${inputyear.value} \n Why do you want to work with us ?: ${inputreason.value} \n Experience: ${inputexperience.value} \n Department: ${inputdepartment.value}`);
}

document.querySelector("form").addEventListener("submit", onSubmit)
