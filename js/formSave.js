document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    const data = {
        firstName: document.getElementById("first-name").value,
        secondName: document.getElementById("second-name").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || "",
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        location: document.querySelector('input[name="location"]:checked')?.value || "",
        fireSize: document.getElementById("fire-size").value,
        fireType: document.getElementById("fire-type").value,
        fireCause: document.getElementById("fire-cause").value,
        fireAppearance: document.getElementById("fire-appearance").value
    };

    // Get existing data and ensure it's always an array
    let existing = JSON.parse(localStorage.getItem("fireReportList"));
    if (!Array.isArray(existing)) {
        existing = []; // Initialize if not an array
    }

    existing.push(data); // Add new report

    localStorage.setItem("fireReportList", JSON.stringify(existing));
    alert("Формата е изпратена успешно и запазена локално. Благодарим!");
});