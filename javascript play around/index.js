function HouseKeeper (yearsOfExperience,name,cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function (){
        alert("Cleaning in progress...");
    }
}


function anotherAddEventListener (typeOfEvent, callback) {
 var eventThatHappened = {
     eventType:"keypress",
     key:"p",
     durationOfKeypress: 2
 }
    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}
debugger;
anotherAddEventListener("keypress", function(event){
    console.log(event);
});
