const notificationsCounter = document.getElementById("notif-counter");
const markAll = document.getElementById("mark-all-read");
const cards = document.querySelectorAll(".card");
const chips = document.querySelectorAll(".chip");
const message = document.getElementById("message");


let unreadCount = 0;

// Initialise the read status
function readStatus() {
  cards.forEach((card, index) => {
    if (index <= 2) {
      card.dataset.readStatus = "unread";
      card.classList.add("unread", "card");
      card.style.backgroundColor = "var(--very-light-grayish-blue)";
      chips[index].style.display = "block";
      unreadCount++;
    } else {
      card.dataset.readStatus = "read";
    }
  });

  updateCounter();
}

// Update the notification counter
function updateCounter() {
  notificationsCounter.innerText = unreadCount;
}

// Toggle all notifications between read and unread
function clickMarkAllRead() {
  markAll.addEventListener("click", () => {
    const markingAsRead = markAll.id === "mark-all-read"; // Determine the action

    cards.forEach((card, index) => {
      if (markingAsRead) {
        // Mark all as read
        card.dataset.readStatus = "read";
        card.style.backgroundColor = "transparent";
        chips[index].style.display = "none";
        messageAboutNotificationStatus();
      } else {
        // Mark all as unread
        card.dataset.readStatus = "unread";
        card.style.backgroundColor = "var(--very-light-grayish-blue)";
        chips[index].style.display = "block";
        messageAboutNotificationStatus();
      }
    });

    // Update the button and counter
    if (markingAsRead) {
      // All notifications are read
      markAll.id = "mark-all-unread";
      markAll.innerText = "Mark all unread";
      unreadCount = 0;
    } else {
      // All notifications are unread
      markAll.id = "mark-all-read";
      markAll.innerText = "Mark all read";
      unreadCount = cards.length;
    }

    updateCounter();
  });
}

// Change read status of individual notifications
function clickChangeReadStatus() {
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (card.dataset.readStatus === "unread") {
        card.dataset.readStatus = "read";
        card.style.backgroundColor = "transparent";
        chips[index].style.display = "none";
        messageAboutNotificationStatus();

        unreadCount = Math.max(0, unreadCount - 1); // Prevent negative count
      } else {
        card.dataset.readStatus = "unread";
        card.style.backgroundColor = "var(--very-light-grayish-blue)";
        chips[index].style.display = "block";
        messageAboutNotificationStatus();
        unreadCount++;
      }

      updateCounter();
    });
  });
}
function messageAboutNotificationStatus() {
  // Targeting index 3
  const card = cards[3];

  if (card && card.dataset.readStatus === "unread") {
    message.style.display = "none";
  } else {
    message.style.display = "block";
  }
}

const modal = document.querySelector(".modal");
modal.addEventListener("click", (e) => {
  console.log(e.target);
});
// Function calls
readStatus();
clickMarkAllRead();
clickChangeReadStatus();


