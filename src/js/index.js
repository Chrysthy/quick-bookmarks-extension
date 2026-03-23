let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage

    render(myLeads)
}



function render(leads) {
    
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
    
        listItems += `    
            <li>
                <a href="${leads}" target="_blank"> ${leads[i]} </a>
            </li>
        `
    
    }

    ulEl.innerHTML = listItems
}



deleteBtn.addEventListener("dblclick", () => {

    localStorage.clear()
    myLeads = []

    render(myLeads)
})


btn.addEventListener("click", () => { 

    myLeads.push(inputEl.value)
    inputEl.value = ''
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

    render(myLeads)
})



