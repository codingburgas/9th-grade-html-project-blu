const dataList = JSON.parse(localStorage.getItem("fireReportList"));

const container = document.getElementById("report-container");

if (Array.isArray(dataList) && dataList.length > 0) {
    container.innerHTML = dataList.map(data => `
        <div class="info-box">
            <p><strong>Име:</strong> ${data.firstName} ${data.secondName}</p>
            <p><strong>Пол:</strong> ${data.gender}</p>
            <p><strong>Имейл:</strong> ${data.email}</p>
            <p><strong>Адрес:</strong> ${data.address}</p>
            <p><strong>Местоположение:</strong> ${data.location}</p>
            <p><strong>Големина на пожара:</strong> ${data.fireSize}</p>
            <p><strong>Тип пожар:</strong> ${data.fireType}</p>
            <p><strong>Причина за пожара:</strong> ${data.fireCause}</p>
            <p><strong>Външен вид на пожара:</strong> ${data.fireAppearance}</p>
        </div>
    `).join("<hr>");
} else {
    container.innerHTML = "<p>Няма запазени сигнали.</p>";
}