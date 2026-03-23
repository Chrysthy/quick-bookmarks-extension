let myLeads = [];
const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")
let listItems = ""


btn.addEventListener("click", () => { 

    myLeads.push(inputEl.value)
    inputEl.value = ''
    console.log(myLeads)
    
})

for (let i = 0; i < myLeads.length; i++) {
    let listItems = ""

    listItems += `<li>" ${myLeads[i]} </li>`

    listItems += `    
        <li>
            <a href="${myLeads}" target="_blank"> ${myLeads[i]} </a>
        </li>
    `

}

ulEl.innerHTML = listItems