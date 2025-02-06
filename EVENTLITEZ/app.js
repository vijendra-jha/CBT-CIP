document.getElementById("eventForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;
    const description = document.getElementById("eventDescription").value;
  
    // Create new event item
    const eventItem = document.createElement("li");
  
    eventItem.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <span>Date: ${new Date(date).toLocaleDateString()}</span>
    `;
  
    // Append new event to the event list
    document.getElementById("eventList").appendChild(eventItem);
  
    // Clear form fields
    document.getElementById("eventForm").reset();
  });
  