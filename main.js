//fetch("data.json")
fetch("http://localhost:3000/knygos")
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

document.querySelector("#addbook").addEventListener("submit", e => {
    e.preventDefault();
    let autorius = e.target.elements.autorius.value;
    let pavadinimas = e.target.elements.pavadinimas.value;
    let leidykla = e.target.elements.leidykla.value;
    let metai = e.target.elements.metai.value;
    let puslapiai = e.target.elements.puslapiai.value;
    let virselis = e.target.elements.virselis.value;
    let temos = e.target.elements.temos.value;
    console.log(autorius, pavadinimas, leidykla, metai, puslapiai, temos, virselis);
    fetch("http://localhost:3000/knygos", {
        method: "POST",
        headers : {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
            virselis: virselis,
            pavadinimas: pavadinimas,
            autorius: autorius,
            leidykla: leidykla,
            leidimo_metai: metai,
            puslapiu_skaicius: puslapiai,
            temos: temos
        })
    })
})