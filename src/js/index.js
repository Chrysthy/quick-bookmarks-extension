let myLeads = [];
const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn") 


btn.addEventListener("click", () => { 

    myLeads.push(inputEl.value)
    inputEl.value = ''
    console.log(myLeads)
    
})