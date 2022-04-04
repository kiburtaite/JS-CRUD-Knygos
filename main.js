fetch("data.json")
.then(res => res.json())
.then(data => showbooks(data));

const showbooks = (book) => {
    book.forEach(book => {
        document.querySelector("#books").innerHTML +=
        `<div>
        <img src="${book.virselis}">
        <p>Autorius: ${book.autorius}</p>
        <p>Pavadinimas: ${book.pavadinimas}</p>
        <p>Leidykla: ${book.leidykla}</p>
        <p>Leidimo metai: ${book.leidimo_metai} m.</p>
        <p>Puslapių skaičius: ${book.puslapiu_skaicius} psl.</p>
        <p>Temos: ${book.temos} </p>
        </div>`
    })
}
