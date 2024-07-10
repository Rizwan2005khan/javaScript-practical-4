document.addEventListener("DOMContentLoaded", function() {
    function findHighestAndLowest() {
        let numbers = [10, 5, 8, 3, 12, 7, 2];
        let highest = numbers[0];
        let lowest = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > highest) {
                highest = numbers[i];
            }
            if (numbers[i] < lowest) {
                lowest = numbers[i];
            }
        }
        let resultsList = document.getElementById("resultsList");
        resultsList.innerHTML = ""; 
        let highestItem = document.createElement("li");
        highestItem.textContent = `Highest number: ${highest}`;
        resultsList.appendChild(highestItem);

        let lowestItem = document.createElement("li");
        lowestItem.textContent = `Lowest number: ${lowest}`;
        resultsList.appendChild(lowestItem);
    }

    let button = document.querySelector("button");
    button.addEventListener("click", findHighestAndLowest);
});
