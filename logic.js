// Assignment Lesson 6
let allStudents = ['A','B-',1,4,5,2]
  
  let studentsWhoPass = [];
  let l=0;
  for(let i=0;i<allStudents.length;i++){
    if(allStudents[i]>=3 || allStudents[i]==="A" || allStudents[i]==="B-" ){
          studentsWhoPass[l]=allStudents[i];
          l++;
      }
  }
  console.log(studentsWhoPass);