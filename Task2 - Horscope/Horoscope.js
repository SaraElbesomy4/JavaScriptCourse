

// Function to check that the user entered a valid name (any string)
let checkName = function (Name){
    while( !Name){
        Name = prompt("Please, Enter your name");
    }
    return Name;
}

// Function to check the validity of the password entered by the user (123)
let checkPass = function (Pass){
    for(var i=0; i<2 ; i++){
        if( Pass === "123"){
            break;
        }
        else{
            Pass = prompt("Please, Enter your password :")
            continue;
            
        }
    }
    return i;
}

// Function to check the validity of the month entered by user
let checkMonth = function(Month){
    const Months = ["1", "2", "3", "4","5","6","7","8","9","10","11","12"];
    while( !Months.includes(Month)){
        Month = prompt("Please, Enter your birth month :")
    }
    return Month;
}

// Function to check the validity of the day entered by the user
let checkDay = function(Day, Month){
    const Months30 = ["4","6","9","11"];
    const Months31 = ["1","3","5","7","8","10","12"]
    while(!(Number.isInteger(Number(Day)))){ 
        Day = prompt("Please, Enter your birth day :")   
    }
    
    if(Month === "2" ){
        while( !(Day>0 && Day<=28) ){
            Day = prompt("Please, Enter your birth day :")
        }
    }
    else if(Months30.includes(Month) ){
        while( !(Day>0 && Day<=30)){
            Day = prompt("Please, Enter your birth day :")
        }
    }
    else if(Months31.includes(Month)){
        while( !(Day>0 && Day<=31)){
            Day = prompt("Please, Enter your birth day :")
        }
    }
       
    return Day;
}

// Function to get the horoscope
let getHoroscope = function(Day, Month){
    let Horo;
    switch(Month){
        case "1":
            if( Day > "19"){
                Horo = "Aquarius"
            }
            else{
                Horo = "Capricorn"
            }
            break;
        case "2":
            if( Day > "18"){
                Horo = "Pisces"
            }
            else{
                Horo = "Aquarius"
            }
            break;
        case "3":
            if( Day > "20"){
                Horo = "Aries"
            }
            else{
                Horo = "Pisces"
            }
            break;
        case "4":
            if( Day > "19"){
                Horo = "Taurus"
            }
            else{
                Horo = "Aries"
            }
            break;
        case "5":
            if( Day > "20"){
                Horo = "Gemini"
            }
            else{
                Horo = "Taurus"
            }
            break;
        case "6":
            if( Day > "20"){
                Horo = "Cancer"
            }
            else{
                Horo = "Gemini"
            }
            break;
        case "7":
            if( Day > "22"){
                Horo = "Leo"
            }
            else{
                Horo = "Cancer"
            }
            break;
        case "8":
            if( Day > "22"){
                Horo = "Virgo"
            }
            else{
                Horo = "Leo"
            }
            break;
        case "9":
            if( Day > "22"){
                Horo = "Libra"
            }
            else{
                Horo = "Virgo"
            }
            break;
        case "10":
            if( Day > "22"){
                Horo = "Scorpio"
            }
            else{
                Horo = "Libra "
            }
            break;
        case "11":
            if( Day > "21"){
                Horo = "Sagittarius"
            }
            else{
                Horo = "Scorpio"
            }
            break;
        case "12":
            if( Day > "21"){
                Horo = "Capricorn"
            }
            else{
                Horo = "Sagittarius"
            }
            break;

    }
    return Horo;
}

// main code

var startHoroscope = function(){

    let name_string;
    let pass;
    let month;
    let day;
    let horo;

    name_string = prompt("Please, Enter your name :"); 
    name_string = checkName(name_string)

    pass = prompt("Please, Enter your password :")
    flag = checkPass(pass);

    if ( flag === 2){
        alert("You’ve entered a wrong password 3 times.")
    }
    else{
        month = prompt("Please, Enter your birth month :")
        month = checkMonth(month);

        day = prompt("Please, Enter your birth day :")
        day = checkDay(day, month);
    
        horo = getHoroscope(day,month)
        alert("Hi " + name_string + ", " + "You are born in " + day + " / " + month + " so, your horoscope is " + horo + " ." )

    }
}

// connect the javascript file with button click
var startButton = document
  .querySelector("#startHoroscope")
  .addEventListener("click", () => {
    this.startHoroscope(); });
