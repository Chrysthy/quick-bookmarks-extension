let myLeads = [];
const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage

    renderLeads()
}


deleteBtn.addEventListener("dblclick", () => {

    localStorage.clear()
    myLeads = []

    renderLeads()
})


btn.addEventListener("click", () => { 

    myLeads.push(inputEl.value)
    inputEl.value = ''
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

    
})



function renderLeads() {
    
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
}
