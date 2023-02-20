const info = document.querySelector(".info");
const firstName = document.querySelector(".name");
const job = document.querySelector(".job");
const img = document.querySelector(".img");
const sliderContainer = document.querySelector(".slider-container");

var val = 0;

const sliderArray = [
    {
        img: "./images/image-tanya.jpg",
        alt: "Tanya",
        information: "“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: "Tanya Sinclair",
        job: "UX Engineer"
    },
    {
        img: "./images/image-john.jpg",
        alt: "John",
        information: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        name: "John Tarkpor",
        job: "Junior Front-end Developer"
    }
]

showArray();
prev();
next();
function prev() {
    document.querySelector("#prev").addEventListener("click", function () {
        val--;

        if (val < 0) {
            val = sliderArray.length - 1;
        }
        showArray();
        classListController();
    });
}


function next() {
    document.querySelector("#next").addEventListener("click", function () {
        val++;

        if (val == sliderArray.length) {
            val = 0;
        }
        showArray();
        classListController();
    });
}








function showArray() {

    sliderContainer.innerHTML = `

        <div class="slider-content">
        <h2 class="info">${sliderArray[val].information}</h2>
        <div class="other">
          <p class="name">${sliderArray[val].name}</p>
          <span class="job">${sliderArray[val].job}</span>
        </div>

      </div>
      <img src="${sliderArray[val].img}" alt="${sliderArray[val].alt}" class="img">
  `;


}




function classListController() {
    document.querySelector(".slider-container").classList.add("u");

    document.querySelector("#next").classList.add("passive");
    document.querySelector("#prev").classList.add("passive");
    setTimeout(() => {
        document.querySelector("#next").classList.remove("passive");
        document.querySelector("#prev").classList.remove("passive");
        document.querySelector(".slider-container").classList.remove("u");
    }, 500);
}



document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        document.querySelector("#next").click();
    }
    else if (e.key == "ArrowLeft") {
        document.querySelector("#prev").click();
    }
});


