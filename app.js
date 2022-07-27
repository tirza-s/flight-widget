const tableBody = document.getElementById("table-body");

let flights = [
    {
        time: "08:15",
        destination: "SINGAPORE",
        flight: "AB A340",
        gate: "B 13",
        remarks: "ON TIME"
    },
    {
        time: "12:45",
        destination: "NEW YORK",
        flight: "AF 3658",
        gate: "Q 1",
        remarks: "DELAYED"
    },
    {

        time: "14:20",
        destination: "CAPE TOWN",
        flight: "EK184",
        gate: "A 12",
        remarks: "CANCELLED"
    },
    {
        time: "15:55",
        destination: "HELSINKI",
        flight: "AB A321",
        gate: "C 5",
        remarks: "ON TIME"
    },
    {
        time: "21:10",
        destination: "JAKARTA",
        flight: "AC761",
        gate: "Q 21",
        remarks: "ON TIME"
    },
    {
        time: "13:20",
        destination: "TOKYO",
        flight: "BE 787-8",
        gate: "P 5",
        remarks: "DELAYED"
    },
]

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        for (flightDetail in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement("div");

                setTimeout(() => {
                    letterElement.classList.add("flip");
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);

                }, 100 * index)

            }
            tableRow.append(tableCell);
        }
        tableBody.append(tableRow);
    }
}

populateTable();
