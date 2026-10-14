const dateOfBirth = "06/03/2006";

const getStudentName = () => {
  return "Aryan Gahlot";
};

const getCampusName = () => {
  return "University of east london";
};

// Make these functions and values available to other files
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateOfBirth;

exports.Studentgrade = (marks) => {
  if (marks > 50 && marks < 70) {
    return "B grade";
  } else {
    return "A grade";
  }
};