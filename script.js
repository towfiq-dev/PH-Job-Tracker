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

//Handling button click actions
mainContainer.addEventListener('click', function(e) {
    const clickedElement = e.target;
    const singleCard = clickedElement.closest('.job-card');

    if (!singleCard) {
        return;
    }

    const badgeArea = singleCard.querySelector('.status-badge');

    //Pressing the interview button
    if (clickedElement.classList.contains('interview-btn')) {
        badgeArea.innerText = "Interview";
        
        badgeArea.classList.remove('bg-blue-50', 'text-blue-600', 'bg-red-50', 'text-red-600');
        badgeArea.classList.add('bg-green-50', 'text-green-600');
        
        updateAllNumbers();
    }

    //If you press the rejected button
    if (clickedElement.classList.contains('rejected-btn')) {
        badgeArea.innerText = "Rejected";
        
        badgeArea.classList.remove('bg-blue-50', 'text-blue-600', 'bg-green-50', 'text-green-600');
        badgeArea.classList.add('bg-red-50', 'text-red-600');
        
        updateAllNumbers();
    }

    //If you press the delete icon
    if (clickedElement.closest('.delete-btn')) {
        let check = confirm("Do you want to delete it?");
        
        if (check === true) {
            singleCard.remove();
            updateAllNumbers();
            
            //If everything becomes empty
            let listLeft = mainContainer.getElementsByClassName('job-card').length;
            if (listLeft === 0) {
                noData.classList.remove('hidden');
            }
        }
    }
});

//Tab filtering function
function filterTab(name) {
    const list = mainContainer.getElementsByClassName('job-card');
    let showCount = 0;

    //Set button color
    const btnIds = ['tab-all', 'tab-interview', 'tab-rejected'];
    for (let x = 0; x < btnIds.length; x++) {
        let b = document.getElementById(btnIds[x]);
        b.classList.remove('bg-blue-600', 'text-white');
        b.classList.add('bg-gray-200', 'text-gray-700');
    }

    //Turn the selected button blue
    const active = document.getElementById('tab-' + name);
    active.classList.remove('bg-gray-200', 'text-gray-700');
    active.classList.add('bg-blue-600', 'text-white');

    //Show or hide cards
    for (let y = 0; y < list.length; y++) {
        let item = list[y];
        let currentStatus = item.querySelector('.status-badge').innerText.toLowerCase();

        if (name === 'all') {
            item.style.display = "block";
            showCount++;
        } 
        else if (currentStatus === name) {
            item.style.display = "block";
            showCount++;
        } 
        else {
            item.style.display = "none";
        }
    }

    tabText.innerText = showCount + " jobs";
    
    //If there is no data
    if (showCount === 0) {
        noData.classList.remove('hidden');
    } 
    else {
        noData.classList.add('hidden');
    }

}