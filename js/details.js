// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');
// const baseUrl = 'https://jsonplaceholder.typicode.com';

const renderDetails = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

  // const res = await fetch(`${baseUrl}/posts=${id}`);
  // let uri = 'https://jsonplaceholder.typicode.com/users?_embed=posts';
  // const result = await fetch(`${baseUrl}/users?userId=${id}`);
  // const res = await fetch('https://jsonplaceholder.typicode.com/users' + id);

  if (!res.ok) {
    window.location.replace(`/details.html?id=${user.id}`);
  }
  const post = await res.json();
  console.log(post);

  const template =
    `
    <form>
    <label>Full name</label>
    <input type="text" name="name" id="name" value="${post.name}" placeholder="Name" required>
    <label>Phone Number</label>
    <input type="text" placeholder="Enter your Last name" value="${post.phone}">
    <label>Email</label>
    <input type="text" name="name" id="name" value="${post.email}" placeholder="Name" required>
    <label>Website</label>
    <input type="text" placeholder="Enter your Last name" value="${post.website}">
    <label>Username</label>
    <input type="text" name="name" id="name" value="${post.username}" placeholder="Name" required>
    <h1>Address</h1>
    <label>Address line 1</label>
    <input type="text" placeholder="Enter your Last name" value="${post.address.geo.lat} ${post.address.geo.lng}">
    <label>Address line 2</label>
    <input type="text" name="name" id="name" value="${post.address.suite}" placeholder="Name" required>
    <label>Street</label>
    <input type="text" placeholder="Enter your Last name" value="${post.address.street}">
    <label>City</label>
    <input type="text" placeholder="Enter your Last name" value="${post.address.city}">
    <label>Zip code</label>
    <input type="text" name="name" id="name" value="${post.address.zipcode}" placeholder="Name" required>
    </form>
  `;
  container.innerHTML = template;
}

var header = document.getElementById("tabs");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// function todos() {
//   var welcome = document.getElementById("preinfo");
//   // var name = document.getElementById("name");

//   welcome = "";
// }

// function write_name() {
//   var welcomeParra = document.getElementById("welcome");
//   var name = document.getElementById("name");

//   welcomeParra.innerHTML = "welcome" + name.value;
// }

// deleteBtn.addEventListener('click', async () => {
//   const res = await fetch('http://localhost:3000/posts/' + id, {
//     method: 'DELETE'
//   });
//   window.location.replace("/");
// })

window.addEventListener('DOMContentLoaded', renderDetails);



// javascript for details.html
// const id = new URLSearchParams(window.location.search).get('id');
// const container = document.querySelector('.details');
// const deleteBtn = document.querySelector('.delete');
// const baseurl = 'https://jsonplaceholder.typicode.com';

// const renderDetails = async () => {
  // let url = `${baseurl}/users`;
  // const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
  // const result = await fetch(`${baseurl}/posts?userId=${userId}`);
//   if (!res.ok) {
//     window.location.replace("/");
//   }
//   const post = await res.json();

//   console.log(post);

//   const template = `
//     <h1>${post.title}</h1>
//     <p>${post.body}</p>
//   `

//   container.innerHTML = template;
// }

// deleteBtn.addEventListener('click', async () => {
//   const res = await fetch('http://localhost:3000/posts/' + id, {
//     method: 'DELETE'
//   });
//   window.location.replace("/");
// })

// window.addEventListener('DOMContentLoaded', renderDetails);
