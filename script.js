function generateTeamCards() {
  console.log("Generating team cards...");
  const teamCardsContainer = document.getElementById("teamCards");
  if (!teamCardsContainer) {
    console.error("Team cards container not found!");
    return;
  }

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    let backgroundColor = "#cccccc";

    card.innerHTML = `
        <div class="card">
            <div class="card-header">
                ${member.name}
            </div>
            <img src="${member.imageURL}" class="image-fluid">
            <div class="card-body" style="background-color:${backgroundColor};">
                <p><strong>Information:</strong> ${member.Information}</p>
            </div>
        </div>
      `;

    // If the member has items, create a bullet list
    if (member.items) {
      const bulletList = createBulletList(member.items);
      card.querySelector(".card-body").appendChild(bulletList);

      // Adding links for Financial Literacy Resources
      if (member.links) {
        const budgetingLink = document.createElement("p");
        budgetingLink.innerHTML = `<a href="${member.links.budgeting}" target="_blank">Budgeting Tools</a>`;

        const costLink = document.createElement("p");
        costLink.innerHTML = `<a href="${member.links.costOfAttendance}" target="_blank">Cost of Attendance</a>`;

        const workshopsLink = document.createElement("p");
        workshopsLink.innerHTML = `<a href="${member.links.workshops}" target="_blank">Financial Literacy Workshops</a>`;

        card.querySelector(".card-body").appendChild(budgetingLink);
        card.querySelector(".card-body").appendChild(costLink);
        card.querySelector(".card-body").appendChild(workshopsLink);
      }
    }

    teamCardsContainer.appendChild(card);
  });
}
