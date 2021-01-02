function generateMarksheet() {
  
  let math, english, computer, totalMarks, marksObt, percentage, grade ,result ;

  math = parseInt(document.getElementById('math').value);
  english = parseInt(document.getElementById('eng').value);
  computer = parseInt(document.getElementById('comp').value);
  totalMarks = 300;
  
  if(math >= 0 && english >= 0 && computer >= 0){
    
    marksObt = math + english + computer;
    percentage = ((marksObt / totalMarks) * 100).toFixed(2);

    switch (
      percentage > 80 && percentage <= 100 ? 1:
      percentage > 70 && percentage < 80 ? 2:
      percentage > 60 && percentage < 70 ? 3:
      0
      ) {
      case 1:
        grade = "A1";
        result = "Excellent";
        break;
      case 2:
        grade = "A";
        result = "Good";
        break;
      case 3:
        grade = "B";
        result = "You Need To Improve";
        break;
      case 0:
        grade = "Fail";
        result = "Sorry";
        break;
      default:
        document.getElementById('err').innerHTML = "Something went wrong try again";
    }
    
    let table = document.getElementsByTagName('TABLE')[0];
    table.style.display = "block";
    document.getElementById("s1").innerText = math;
    document.getElementById("s2").innerText = english;
    document.getElementById("s3").innerText = computer;
    document.getElementById("totalObt").innerText = marksObt;
    document.getElementById("percentage").innerText = percentage+"%";
    document.getElementById("grade").innerText = grade;
    document.getElementById("remarks").innerText = result;

    
  }else{
    document.getElementById('err').innerHTML = "Please enter required fields";
  }

}