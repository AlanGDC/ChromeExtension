var frameValue = document.querySelectorAll("#brandBand_1 > div > div > div.dashboardContainer > iframe")[0];
var content = frameValue.contentDocument;
var body = content.body;



const DELTA_TIME = 2000 * 60 * 2

let CONT = 0

const refresh = (taskID) => {
  CONT++

  body.querySelectorAll(".slds-button.slds-button--neutral.refresh")[0].click();

  console.log(`tarea 1, se ejecuto ${CONT} veces`, )
  
  resetIntervals(taskID)
}

const runTask = () => {
  const taskID = setInterval(() => refresh(taskID), DELTA_TIME)
  refresh(taskID)
};

const resetIntervals = (taskID) => {
  if(CONT === 3){
    console.log(`reset, ${taskID}`)
    clearInterval(taskID) 
    CONT = 0
    runTask()
  }
}


runTask()
