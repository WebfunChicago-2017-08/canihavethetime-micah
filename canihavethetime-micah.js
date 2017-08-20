



function canIhaveTheTime(HOUR, MIN, PERIOD){
    

var adjective = "quarter after";
var dayphase = "";
    
if (MIN <= 30) {
    if (MIN == 15) {
        adjective = "quarter after";
    }
    else if (MIN == 5) {
        adjective = "5 after";
    }
    else if (MIN == 30) {
        adjective = "half past";
    }
    else if (MIN == 00) {
        adjective = "exactly";
    }
    else {
        adjective = "just after";
    }
}
else {
    adjective = "almost";
    HOUR += 1;
    if (HOUR == 13) {
        HOUR = 1;
    }
    if(HOUR == 12){
        if (PERIOD == "PM") {
            PERIOD = "AM";
        }
        else {
            PERIOD = "PM";
        }
    }
    if (MIN > 59) {
        console.log("There can't be more than 60 minutes in an hour...I think my watch is broken...");
    }
}

if (PERIOD == "AM") {     // <----- "AM"
    if (HOUR == 12) {
        dayphase = "midnight";
    }
    else {
        dayphase = "in the morning";
    }
}
else {                   // <----- "PM" 
    if (HOUR == 12) {
        dayphase = "noon";
    }
    else if (HOUR < 7) {
        dayphase = "in the afternoon";
    }
    else {
        dayphase = "at night";
    }
}
if(MIN === 0){
  MIN = "00";
}
console.log("It's " + adjective + " " + HOUR + " " + dayphase + "..." + " " + HOUR + ":" + MIN + PERIOD);

}

canIhaveTheTime(11,45,"AM");
canIhaveTheTime(1,30,"AM");
canIhaveTheTime(12,0,"AM");
canIhaveTheTime(3,15,"PM");
canIhaveTheTime(5,05,"AM");
