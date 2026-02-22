//Keep all IDs in variables
const mainContainer = document.getElementById('job-container');
const tCount = document.getElementById('total-count');
const iCount = document.getElementById('interview-count');
const rCount = document.getElementById('rejected-count');
const tabText = document.getElementById('tab-job-count');
const noData = document.getElementById('empty-state');

//Function to calculate numbers
function updateAllNumbers() {
    const totalCards = mainContainer.getElementsByClassName('job-card');
    
    let total = totalCards.length;
    let interviewNum = 0;
    let rejectedNum = 0;

    //Checking with a loop
    for (let i = 0; i < totalCards.length; i++) {
        let card = totalCards[i];
        let badge = card.querySelector('.status-badge');
        let status = badge.innerText.toLowerCase();

        if (status === 'interview') {
            interviewNum = interviewNum + 1;
        } 
        
        if (status === 'rejected') {
            rejectedNum = rejectedNum + 1;
        }
    }

    //Setting values ​​on the dashboard
    tCount.innerText = total;
    iCount.innerText = interviewNum;
    rCount.innerText = rejectedNum;
    
    //Showing how many are next to the tab
    tabText.innerText = total + " jobs";
}