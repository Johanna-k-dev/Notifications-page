const notificationsCounter = document.getElementById("notif-counter");

const markAll = document.querySelector("#mark-all-read");

const cards = document.querySelectorAll(".card");

const chips = document.querySelectorAll(".chip");

let counter = 0;

/*Found and create read modify styles and unread attribut */

function readStatus() {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    markAll.addEventListener("click", (e) => {
      cards[i].setAttribute("style", "background-color:trensparent;");
      notificationsCounter.innerText = 0;
      chips[i].setAttribute("style", "display:none;");
    });

    if (i <= 2) {
      /*Add read status attribut*/

      cards[i].dataset.readStatus = "unread";
      cards[i].classList = "unread, card";
      cards[i].setAttribute(
        "style",
        "background-color:var(--very-light-grayish-blue);"
      );

      // Counter print unread notifications

      counter = i + 1;
      notificationsCounter.innerText = counter;
    } else {
      // Add unread status attribut
      cards[i].dataset.readStatus = "read";

      let newcounter = counter - 1;
    }
  }
}
readStatus();

for (let i = 0; i < chips.length; i++) {
  const chip = chips[i];

  if (cards[i].dataset.readStatus == "unread") {
    chips[i].setAttribute("style", "display:block;");
  }
  console.log(chips[i]);
}
function clickChangeReadStatus() {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];

    /**Add event listener click on cards */
    cards[i].addEventListener("click", (e) => {
      if (cards[i].dataset.readStatus === "unread") {
        cards[i].dataset.readStatus = "read";
        cards[i].setAttribute("style", "background-color:trensparent;");
        chips[i].setAttribute("style", "display:none;");

        counter = counter - 1;
        notificationsCounter.innerText = parseInt(counter);
      }
    });
  }
}
clickChangeReadStatus();

console.log(notificationsCounter);
