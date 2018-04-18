var address_book = [];
let contact_name, contact_email, contact_phone;
document.getElementById('adrress_form').addEventListener("click", SaveAddress());
function SaveAddress() {
    let user = {}
    contact_name = document.getElementById("contact_name").value;
    contact_email = document.getElementById("contact_email").value;
    contact_phone = document.getElementById("contact_phone").value;
    user.name = contact_name;
    user.email = contact_email;
    user.phone = contact_phone
    address_book.push(user);
    ++i;
    console.log(address_book)
    var ul_node = document.createElement("UL");



    var li_node = document.createElement("LI");
    var content = document.createTextNode(user.name);
    var newNode = li_node.appendChild(li_node.appendChild(content));
    var currentDiv = document.getElementById("title");
    document.body.insertBefore(newNode, currentDiv);
    // for(let i=0; i<address_book.length; i++){
    //     let user = address_book[i];
    console.log(user.name)
    // var node = document.createElement("LI");                 // Create a <li> node
    // var textnode = document.createTextNode(user.name);         // Create a text node
    // node.appendChild(textnode);                              // Append the text to <li>
    // document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" 
    // }
    return false;
}
