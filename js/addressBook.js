var address_book = [];
document.getElementById('adrress_form').addEventListener('submit', SaveAddress);

// Save Address details
function SaveAddress(e) {
    //Get user details
    var contactName = document.getElementById("contact_name").value;
    var contactEmail = document.getElementById("contact_email").value;
    var contactPhone = document.getElementById("contact_phone").value;
    
    var user = {
        name: contactName,
        email: contactEmail,
        phone: contactPhone
    }
    address_book.push(user);
    console.log(address_book)
    //document.getElementById('address_book').reset();

    // Re-fetch Address
    fetchAddress();

    var contactName = document.getElementById("contact_name").value = '';
    var contactEmail = document.getElementById("contact_email").value = '';
    var contactPhone = document.getElementById("contact_phone").value = '' ;

e.preventDefault();
}

// Fetch Address
function fetchAddress() {
    // Get output id
    var addressBook = document.getElementById('addressBook');

    // Build output
    addressBook.innerHTML = '';
    for (var i = 0; i < address_book.length; i++) {
        var name = address_book[i].name;
        var email = address_book[i].email;
        var phone = address_book[i].phone;

        addressBook.innerHTML += 
            '<button onclick="Display(' + i + ')"><h3>' + name + '</h3></button><p></p>' +
                '<div id="'+i+'"class="details" style=display:none;>' + 
                    ' <p> ' + email + '<span>&nbsp;&nbsp;&nbsp;</span>'+ phone + '</p>'+
                    ' <a onclick="editContact(' + i + ');openModal()" class="btn btn-danger" href="#">Edit</a> ' +
                    ' <a onclick="deleteContact(' + i + ')" class="btn btn-danger" href="#">Delete</a> ' +
                '</div>';
    }
}

function Display(i){
    var x = this.document.getElementById(i);
    if(x.style.display === "none"){
        x.style.display = "block"
    } else {
        x.style.display = "none";
    }
}

function editContact(i) {
    //alert(i)
    var contactName = document.getElementById("edit_name").value = address_book[i].name;;
    var contactEmail = document.getElementById("edit_email").value = address_book[i].email;;
    var contactPhone = document.getElementById("edit_phone").value = address_book[i].phone;;
}
function deleteContact(i) {
    var confirmDeletion = confirm(`Are you sure you want to delete ${address_book[i].name} ?`);

    if (confirmDeletion) {
        address_book.splice(i, 1);
        fetchAddress();
    }
    // console.log(confirmDeletion);
}





// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}