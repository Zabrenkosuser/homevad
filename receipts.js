// רשימה של כל הדירות
const apartments = [
    { number: 1, owners: ["טוינה נתנאל", "זברנקו כריסטופר"] },
    { number: 2, owners: ["קריסט הבר גוזו", "קריסט הבר ליביה"] },
    { number: 3, owners: ["וייס דורה"] },
    { number: 4, owners: ["טווערסקי אסתר", "טווערסקי לוי יצחק"] },
    { number: 5, owners: ["אוליסקי אלברטו", "אוליסקי שרמן אנה"] },
    { number: 6, owners: ["שיתי ספירו"] },
    { number: 7, owners: ["טניוק מריה"] },
    { number: 8, owners: ["אנקוה עזיזה"] },
    { number: 9, owners: ["בונדרנקו-גיל נינה"] },
    { number: 10, owners: ["מור יעקב גל"] },
    { number: 11, owners: ["צויבל אברהם דוד", "שטול הדסה"] },
    { number: 12, owners: ["יוסף הלאל"] },
    { number: 13, owners: ["שקמונה חברה ממשלתית עירונית"] },
    { number: 14, owners: ["עובדיה אליהו"] },
    { number: 15, owners: ["שטנגר משה"] },
    { number: 16, owners: ["בוברמן גריגורי"] },
    { number: 17, owners: ["קליין שרה"] },
    { number: 18, owners: ["לייפר אסתר מלכה", "לייפר משולם זלמן"] },
    { number: 19, owners: ["עזרזר בניה", "עזרזר נופר"] },
    { number: 20, owners: ["קרבץ מיכאל"] },
    { number: 21, owners: ["מילמן מריאנה"] },
    { number: 22, owners: ["אפראימוב אלינה"] },
    { number: 23, owners: ["יערי גל"] },
    { number: 24, owners: ["בורוצקי אדית"] },
    { number: 25, owners: ["פחמנוב פבל", "פחמנוב לילה"] },
    { number: 26, owners: ["אוסמן טופז טובה", "אוסמן שמעון"] },
    { number: 27, owners: ["אגייב מרינה"] },
    { number: 28, owners: ["מנצגריצקי אלוירה"] },
    { number: 29, owners: ["גולדברג בחטייר", "גולדברג טניה"] },
    { number: 30, owners: ["ליבסון רפאל", "ליבסון ליודמילה"] },
    { number: 31, owners: ["שקמונה חברה ממשלתית עירונית"] },
    { number: 32, owners: ["דדוב ליודמילה"] }
];

// משתנה שיחזיק את הקבלות שנוצרו
const receipts = {};

// יצירת אפשרויות לבחירת דירה
const apartmentSelect = document.getElementById('apartmentSelect');
apartments.forEach(apartment => {
    const option = document.createElement('option');
    option.value = apartment.number;
    option.textContent = `דירה ${apartment.number}`;
    apartmentSelect.appendChild(option);
});

// הצגת קבלות עבור הדירה שנבחרה
apartmentSelect.addEventListener('change', function () {
    const apartmentNumber = this.value;
    const container = document.getElementById('receiptsContainer');

    // אם אין קבלות עבור הדירה, מציגים הודעה
    if (!receipts[apartmentNumber] || receipts[apartmentNumber].length === 0) {
        container.innerHTML = `<p>לא נוצרו קבלות עבור דירה ${apartmentNumber}.</p>`;
        return;
    }

    // יצירת טבלה עם הקבלות
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>שם</th>
                <th>ת.ז</th>
                <th>קובץ להורדה</th>
                <th>תאריך ושעה</th>
            </tr>
        </thead>
        <tbody>
            ${receipts[apartmentNumber].map(receipt => `
                <tr>
                    <td>${receipt.name}</td>
                    <td>${receipt.id}</td>
                    <td><a href="${receipt.file}" download>הורד קובץ</a></td>
                    <td>${receipt.date}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    container.innerHTML = '';
    container.appendChild(table);
});

// פונקציה להוספת קבלה (קריאה לדוגמה)
function addReceipt(apartmentNumber, name, id, file) {
    const date = new Date().toLocaleString(); // תאריך ושעה
    if (!receipts[apartmentNumber]) {
        receipts[apartmentNumber] = [];
    }
    receipts[apartmentNumber].push({ name, id, file, date });
}

// קריאה לדוגמה להוספת קבלה (ניתן להתאים לפי הצורך)
addReceipt(1, "טוינה נתנאל", "314939091", "receipt1.pdf");
addReceipt(2, "קריסט הבר גוזו", "6493599", "receipt2.pdf");