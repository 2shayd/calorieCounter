
document.addEventListener("DOMContentLoaded", function(event) {

    let foodArray = [];
    let totalCal = 0;
    let displayCalories = document.getElementById("resultCalories");

    document.getElementById("submit").addEventListener("click", function () {
        submitForm()
    })

    function submitForm(){
        let Food = {
            type: document.getElementById("foodItem").value,
            calories: document.getElementById("calorieAmt").value,
            intCal: function(){
                this.calorires = parseInt(calories);
            },
            logFood: function(){
                console.log('Food:' + this.type + '\t' + 'Calories:' + this.calories + '\n');
            }
        }

        foodArray.push(Food)
        for (let i =0; i < foodArray.length; i++) {
            foodArray[i].logFood();    
        }

        addCalories(Food);
        displayCalories.setAttribute("value", totalCal);
    };

    function addCalories(Food) {
        totalCal = parseInt(totalCal) + parseInt(Food.calories);
        return totalCal;
    }
});



