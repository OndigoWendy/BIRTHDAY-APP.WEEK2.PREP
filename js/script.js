//Personal notes
//var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
//It can be said that a variable declared with var is defined throughout the program as compared to let.


function calculateMale(){
   month = document.form.month.selectedIndex;
   month = document.form.month.options[month].value;
   day = document.form.day.selectedIndex;
   day = document.form.day.options[day].value;
   year = document.form.year.value;

  var dob = month + " " + day + ", " + year;

  var stagedDate = new Date(dob); //This newDate() Method gets as to the current date,so we pass our date as an argument into this method to use it.

  var thatDay = stagedDate.getDay()+1; //This method getDay() returns the day number of the dates day of the week.Eg Day 1 is sunday.
  
  var date=stagedDate.getDate(); //This method returns the day number of the dates day of the month eg from 1st to 31st.

  var year=stagedDate.getFullYear();//The getYear() method returns the year in the specified date according to local time. Because getYear() does not return full years ("year 2000 problem"), it is no longer used and has been replaced by the getFullYear() method.


          let weekday = new Array(6);
          weekday[1]="Sunday and your Akan name is Kwasi";
          weekday[2]="Monday and your Akan name is Kwadwo";
          weekday[3]="Tuesday and your Akan name is Kwabena";
          weekday[4]="Wednesday and your Akan name is Kwaku";
          weekday[5]="Thursday and your Akan name is Yaw";
          weekday[6]="Friday and your Akan name is Kofi";
          weekday[7]="Saturday and your Akan name is Kwame";

          if (day != date) alert("Warning!  The date you have entered is invalid!");
         
          else {
              dayBorn = weekday[thatDay];//This is what we are looking for.

              dob = dayBorn+"."+ "Your birthday is on "+ ", " + month + " " + date + ", " + year + ".";
              
              document.getElementById("display2").innerHTML="You were born on a " + dob; //To return our result
}
}

function calculateFemale(){
  month = document.form.month.selectedIndex;
  month = document.form.month.options[month].value;
  day = document.form.day.selectedIndex;
  day = document.form.day.options[day].value;
  year = document.form.year.value;

 var dob = month + " " + day + ", " + year;

 var stagedDate = new Date(dob); //This newDate() Method gets as to the current date,so we pass our date as an argument into this method to use it.

 var thatDay = stagedDate.getDay()+1; //This method getDay() returns the day number of the dates day of the week.Eg Day 1 is sunday.
 
 var date=stagedDate.getDate(); //This method returns the day number of the dates day of the month eg from 1st to 31st.

 var year=stagedDate.getFullYear();//The getYear() method returns the year in the specified date according to local time. Because getYear() does not return full years ("year 2000 problem"), it is no longer used and has been replaced by the getFullYear() method.

         let weekday = new Array(6);
         weekday[1]="Sunday and your Akan name is Akosua ";
         weekday[2]="Monday and your Akan name is Adowa";
         weekday[3]="Tuesday and your Akan name is Abenaa";
         weekday[4]="Wednesday and your Akan name is Akua";
         weekday[5]="Thursday and your Akan name is Yaa ";
         weekday[6]="Friday and your Akan name is Afua ";
         weekday[7]="Saturday and your Akan name is Ama";
         if (day != date) alert("Warning!  The date you have entered is invalid!");
        
         else {
             dayBorn = weekday[thatDay];//This is what we are looking for.

             dob = dayBorn+"."+ "Your birthday is on "+ ", " + month + " " + date + ", " + year + ".";
             
             document.getElementById("display1").innerHTML="You were born on a" + dob; //To return our result
}
}