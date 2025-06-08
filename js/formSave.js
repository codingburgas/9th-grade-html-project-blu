document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // предотвратява презареждането

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

    localStorage.setItem("fireReport", JSON.stringify(data));
    alert("Формата е изпратена успешно и запазена локално. Благодарим!");
});
