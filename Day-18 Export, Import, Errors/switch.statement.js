{
  // Use Switch through days like 0 = Sunday, 1 = Monday, 2 = Tuesday and so on.
  //  If day = 0, then print It is Sunday.
  const day = 0;
  let result;
  switch (day) {
    case 0:
      result = "Sunday";
      break;
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednesday";
      break;
    case 4:
      result = "Thursday";
      break;
    case 5:
      result = "Friday";
      break;
    case 6:
      result = "Saturday";
      break;
    default:
      result = "Invalid day";
  }

  console.log(result);
}
{
  // f grade of student is A+ - give remarks as “Excellent.
  // You have done well.” and do it for all. A+. A, B+, B, C+, C, D, NG.
  const grade = "A+";
  let remarks;
  switch (grade) {
    case "A+":
      remarks = "Excellent";
      break;
    case "A":
      remarks = "Very Good";
      break;
    case "B+":
      remarks = "Good";
      break;
    case "B":
      remarks = "Fair";
      break;
    case "C+":
      remarks = "Satisfactory";
      break;
    case "C":
      remarks = "Needs Improvement";
      break;
    case "D":
      remarks = "Poor";
      break;
    default:
      remarks = "Not Graded";
  }

  console.log(remarks);
}
