/*
    created by: Najla Albaz
*/

//event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    //setting variables
    let nav = document.createElement('ul');
    let fragment = document.createDocumentFragment(); //create fragment for faster 
    let sections = document.querySelectorAll('.sections');

    //for loop to create the nav dynamically
    for(let i = 0; i < 5; i++){
        let item = document.createElement('li'); //create a list item with every iteration
        item.id = `item-${sections[i].id}`; //specify the item id
        let itemText = `Section ${i+1}`; //assign the text displayed
        let link = document.createElement('a'); //create an anchor for every list item (or every iteration)
        link.href = `#${sections[i].id}` //link the nav item to its section
        link.text = itemText;
        item.appendChild(link); //append the anchor to the list item
        fragment.appendChild(item); //add the list item to the fragment
    }

    //add the fragment to the nav
    nav.appendChild(fragment);
    //add the nav to the document
    document.querySelector('#contain-all').appendChild(nav);

    let navItems = document.querySelectorAll('li');

    /*!
    * Determine if an element is in the viewport
    * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
    * @param  {Node}    elem The element
    * @return {Boolean}      Returns true if element is in the viewport
    */
   // edited the function to specify when I need on the screen to return true
    var isInViewport = function (elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.top <= ((window.innerHeight || document.documentElement.clientHeight)/2) &&
            // && distance.left >= 0 &&
            distance.bottom >= (window.innerHeight || document.documentElement.clientHeight) - ((window.innerHeight || document.documentElement.clientHeight)/2)
            // distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    //event listener for when the user scrolls, in order for the nav to show which section is in view
    window.addEventListener('scroll', function (){
        //loop through the sections to check which is in view
        // currentValue is returns the current element being processed
        //source: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
        sections.forEach((currentValue) => {
            let beActive = document.getElementById(`item-${currentValue.id}`);
            //if section in view then add the class 'li_active' to nav item
            //if not, remove the class
            if(isInViewport(currentValue)){
                beActive.classList.add('li_active');
            } else if(!isInViewport(currentValue)){
                beActive.classList.remove('li_active');
            }
        });
    });
});