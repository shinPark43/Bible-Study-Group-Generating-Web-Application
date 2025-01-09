// script.js

document.getElementById("divideButton").addEventListener("click", function () {
    const input = document.getElementById("namesInput").value.trim();
    const names = input.split(",").map(name => name.trim()).filter(name => name);

    if (names.length < 3) {
        alert("Please enter at least three names.");
        return;
    }

    const groups = divideIntoGroups(names);
    displayGroups(groups);
});

function divideIntoGroups(names) {
    // Shuffle the names array
    const shuffled = names.sort(() => Math.random() - 0.5);

    // Divide into groups of 3
    const groups = [];
    while (shuffled.length >= 3) {
        groups.push(shuffled.splice(0, 3));
    }

    // Distribute remaining names
    while (shuffled.length > 0) {
        const groupIndex = Math.floor(Math.random() * groups.length);
        groups[groupIndex].push(shuffled.pop());
    }

    return groups;
}

function displayGroups(groups) {
    const outputDiv = document.getElementById("groupsOutput");
    outputDiv.innerHTML = ""; // Clear previous results

    groups.forEach((group, index) => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "group";

        const groupTitle = document.createElement("h2");
        groupTitle.textContent = `Group ${index + 1}`;
        groupTitle.style.color = "#007bff";

        const groupMembers = document.createElement("p");
        groupMembers.textContent = group.join(", ");

        groupDiv.appendChild(groupTitle);
        groupDiv.appendChild(groupMembers);
        outputDiv.appendChild(groupDiv);
    });

    outputDiv.style.display = "block"; // Ensure output is visible
}
