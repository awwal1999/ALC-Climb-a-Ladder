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
            '<button onclick="Display()"><h3>' + name + '</h3></button>' +
                '<div id="details">' + 
                    ' <p> ' + email + '<span>&nbsp;&nbsp;&nbsp;</span>'+ phone + '</p>'+
                    ' <a onclick="editContact(\' + i + \')" class="btn btn-danger" href="#">Edit</a> ' +
                    ' <a onclick="deleteContact(\' + i + \')" class="btn btn-danger" href="#">Delete</a> ' +
                '</div>';
    }
}

function Display(){
    var x = document.getElementById('details');
    if(x.style.display === "none"){
        x.style.display = "block"
    } else {
        x.style.display = "none";
    }
}