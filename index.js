const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectitem(e){

    removeborder();
    removeshow();
    //add border to curren tab
     
    this.classList.add('tab-border');

    //grab content item from dom
    const tabcontentitem = document.querySelector(`#${this.id}-content`);

    //add show class
    tabcontentitem.classList.add('show');
}

function removeborder(){
    tabitems.forEach(item => item.classList.remove('tab-border'));
}

function removeshow(){
    tabcontentitems.forEach(item => item.classList.remove('show'));
}

//listen for tab click
tabitems.forEach(item => item.addEventListener('click',selectitem))