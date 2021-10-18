document.addEventListener('DOMContentLoaded', () => {

    const newImputForm = function(event){
        event.preventDefault();

        const Name = event.target.Name.value;
        const Species = event.target.Species.value;
        const Continent = event.target.Continent.value;


        const newListItem = document.createElement('li');

        const NameElement = document.createElement('h1');
        NameElement.textContent = Name;
        newListItem.appendChild(NameElement);

        const SpeciesElement = document.createElement('h2');
        SpeciesElement.textContent = Species;
        newListItem.appendChild(SpeciesElement);

        const ContinentElement = document.createElement('p');
        ContinentElement.textContent = Continent;
        newListItem.appendChild(ContinentElement);
       
        const readingList = document.querySelector('#reading-list');
        readingList.appendChild(newListItem);



        

        event.target.reset();
    }

    const handleDeleteAllClick = function(event){
        const readingList = document.querySelector('#reading-list');
        readingList.innerHTML=''
    }
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', newImputForm);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

  
    
})