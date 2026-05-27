const form = document.getElementById("form");
const result = document.getElementById("result");

let count;

form.addEventListener("submit", (e) => {

    e.preventDefault();

    count = 0;

    const correctAnswers = document.querySelectorAll(".correctanswer");

    correctAnswers.forEach((answer) => {

        if (answer.checked) {
            count++;
        }

    });

  result.innerHTML = "your score is : " +  count + "/5";

});
 
