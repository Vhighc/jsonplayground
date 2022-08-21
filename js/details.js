// javascript for details.html

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const contain = document.querySelector('.posts');

// const deleteBtn = document.querySelector('.delete');
// const baseUrl = 'https://jsonplaceholder.typicode.com';

const renderDetails = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

  // let uri = 'https://jsonplaceholder.typicode.com/users?_embed=posts';

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
    var current = document.getElementsByClassName("act");
    current[0].className = current[0].className.replace(" act", "");
    this.className += " act";
  });
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// deleteBtn.addEventListener('click', async () => {
//   const res = await fetch('http://localhost:3000/posts/' + id, {
//     method: 'DELETE'
//   });
//   window.location.replace("/");
// })

// const renderPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts' + id);

//   // let uri = 'https://jsonplaceholder.typicode.com/users?_embed=posts';

//   if (!res.ok) {
//     window.location.replace(`/details.html?id=${user.id}`);
//   }
//   const post = await res.json();

//   console.log(post);

//   const template =
//     `
//     h2>${post.name}</h2>
//     <p>${post.phone}</p>
//   `;
//   container.innerHTML = template;
// }

window.addEventListener('DOMContentLoaded', renderDetails);

const renderPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts' + id);
  // let uri = 'https://jsonplaceholder.typicode.com/users?_embed=posts/id';

  // const res = await fetch(uri);
  const users = await res.json();
  console.log(users);

  let temp = '';
  users.forEach(user => {
    temp += `
      <div class="posts">
        <h2>${user.posts.title}</h2>
        <a href="/details.html?id=${user.id}">Read more</a>
      </div>
    `
  });

  contain.innerHTML = temp;
}

window.addEventListener('DOMContentLoaded', renderPosts);



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
