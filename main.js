let input_ele = document.querySelector("input");
let allspans = document.querySelectorAll(".spans span");
let results = document.querySelector(".result-span span");

//////////////////////////////////////////////check item //////////////////////////////////////////
//event for check span
allspans.forEach((span) => {
  span.addEventListener("click", (eo) => {
    if (eo.target.classList == "check-item") {
      checkinputempty();
      checkitem();
    }
  });
});

//function to check if word at local storage or not
function checkitem() {
  if (input_ele.value !== "") {
    if (localStorage.getItem(input_ele.value)) {
      results.innerHTML = ` Your Item <span> ${input_ele.value}  </span> Founded At Local Storage `;
    } else {
      results.innerHTML = `  Sorry Not Founded <span> ${input_ele.value} </span> `;
    }
  }
}

//////////////////////////////////////////////////////Add Item //////////////////////////////////////////////////
allspans.forEach((span) => {
  span.addEventListener("click", (eo) => {
    if (eo.target.classList == "add-item") {
      checkinputempty();
      addItem();
    }
  });
});

function addItem() {
  if (input_ele.value !== "") {
    localStorage.setItem(input_ele.value, "test");
    results.innerHTML = `  Item <span> ${input_ele.value}  </span>  Added Successfully `;
    input_ele.value = "";
  } else {
    results.innerHTML = `  <span> ${input_ele.value} </span> Please Put item To Added `;
  }
}

///////////////////////////////////////////////////////Delete Item /////////////////////////////////////////////

allspans.forEach((span) => {
  span.addEventListener("click", (eo) => {
    if (eo.target.classList == "delet-item") {
        checkinputempty()
        deletItem()
    }
  });
});

function deletItem() {
  if (input_ele.value !== "") {

    if(localStorage.getItem(input_ele.value))
    {
        localStorage.removeItem(input_ele.value);
        results.innerHTML = ` item  <span> ${input_ele.value}  </span> Removed  Successfully `;
        input_ele.value = '' ;
        
    }
    else{
        results.innerHTML = ` Please Add a Valid Item To Removed  <span> ${input_ele.value} </span> `;
    }
    
  }
}
/////////////////////////////////////////////////// Show Items /////////////////////////////////////////////////////

allspans.forEach((span) => {
    span.addEventListener("click", (eo) => {
      if (eo.target.classList == "show-item") {
        showItems()
      }
    });
  });


  function showItems() {
    if(localStorage.length)
    {
        for(let [key , value] of Object.entries(localStorage)){
            results.innerHTML += `<span> ${key} </span>`
        }
    }
  }
//function to check if there is value at input or not
function checkinputempty() {
  if (input_ele.value == "") {
    results.innerHTML = " Please Input Item ";
  }
}
