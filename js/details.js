const id = new URLSearchParams(window.location.search).get('id');
const containForm = document.querySelector('.details');
const containPosts = document.querySelector('.postinfo');
const containAlbums = document.querySelector('.allalbums');
const containTodos = document.querySelector('.alltodos');
const uri = 'https://jsonplaceholder.typicode.com';


const renderDetails = async () => {
  const res = await fetch(`${uri}/users/${id}?_embed=posts`);
  if (!res.ok) {
    window.location.replace(`/details.html?id=${user.id}`);
  }
  const info = await res.json();
  console.log(info);
  const form =
    `
    <form>
    <label>Full name
    <input type="text" name="name" id="name" value="${info.name}" placeholder="Name" required>
    </label>
    <label>Phone Number
    <input type="text" placeholder="Enter your Last name" value="${info.phone}">
    </label>
    <label>Email
    <input type="text" name="name" id="name" value="${info.email}" placeholder="Name" required>
    </label>
    <label>Website
    <input type="text" placeholder="Enter your Last name" value="${info.website}">
    </label>
    <label>Username
    <input type="text" name="name" id="name" value="${info.username}" placeholder="Name" required>
    </label>
    <h2>Address</h2>
    <label>Address line 1</label>
    <input type="text" placeholder="Enter your Last name" value="${info.address.geo.lat} ${info.address.geo.lng}">
    <label>Address line 2</label>
    <input type="text" name="name" id="name" value="${info.address.suite}" placeholder="Name" required>
    <label>Street</label>
    <input type="text" placeholder="Enter your Last name" value="${info.address.street}">
    <label>City</label>
    <input type="text" placeholder="Enter your Last name" value="${info.address.city}">
    <label>Zip code</label>
    <input type="text" name="name" id="name" value="${info.address.zipcode}" placeholder="Name" required>
    </form>
  `;
    let allPost = '';
  info.posts.forEach(post => {
    
    allPost += `
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          <a href="/comment.html?id=${post.id}">View Comments</a> 
          `
  });
  containPosts.innerHTML = allPost;
  containForm.innerHTML = form;
}


const renderAlbums = async () => {

  const res = await fetch(`${uri}/users/${id}?_embed=albums`);

  const getAlbums = await res.json();
  
  console.log(getAlbums);

  let allbum = '';
  getAlbums.albums.forEach(album => {
    
    allbum += `
          <h4>${album.title}</h4>
          <a href="/photo.html?id=${album.id}">View photos</a>
          `
  });

  containAlbums.innerHTML = allbum;
}


const renderTodos = async () => {

  const res = await fetch(`${uri}/users/${id}?_embed=todos`);

  const getTodos = await res.json();
  
  console.log(getTodos);

  let allTodos = '';
  getTodos.todos.forEach(todo => {
    
    allTodos += `
          <h4>${todo.title}</h4>
          <p>${todo.completed}</p>
          `
  });

  containTodos.innerHTML = allTodos;
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



window.addEventListener('DOMContentLoaded', renderDetails);
window.addEventListener('DOMContentLoaded', renderAlbums);
window.addEventListener('DOMContentLoaded', renderTodos);

// let popup = document.getElementById("pop");
// function openPopup(){
    // popup.classList.add("open-popup");
// }
// function closePopup(){
    // popup.classList.remove("open-popup");
// }

// const modal = document.querySelector('#modal');
// const openModal = document.querySelector('.open-button');
// const closeModal = document.querySelector('.close-button');

// openModal.addEventListener('click', () =>{
//     // modal.show();
//     modal.showModal();
// })

// closeModal.addEventListener('click', () =>{
//     // modal.show();
//     modal.close();
// })



// const id = new URLSearchParams(window.location.search).get('id');
// const container = document.querySelector('.details');
// const containPosts = document.querySelector('.postinfo');



// const renderDetails = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);


//   if (!res.ok) {
//     window.location.replace(`/details.html?id=${user.id}`);
//   }
//   const info = await res.json();

//   console.log(info);

//   const template =
//     `
//     <form>
//     <label>Full name</label>
//     <input type="text" name="name" id="name" value="${info.name}" placeholder="Name" required>
//     <label>Phone Number</label>
//     <input type="text" placeholder="Enter your Last name" value="${info.phone}">
//     <label>Email</label>
//     <input type="text" name="name" id="name" value="${info.email}" placeholder="Name" required>
//     <label>Website</label>
//     <input type="text" placeholder="Enter your Last name" value="${info.website}">
//     <label>Username</label>
//     <input type="text" name="name" id="name" value="${info.username}" placeholder="Name" required>
//     <h1>Address</h1>
//     <label>Address line 1</label>
//     <input type="text" placeholder="Enter your Last name" value="${info.address.geo.lat} ${info.address.geo.lng}">
//     <label>Address line 2</label>
//     <input type="text" name="name" id="name" value="${info.address.suite}" placeholder="Name" required>
//     <label>Street</label>
//     <input type="text" placeholder="Enter your Last name" value="${info.address.street}">
//     <label>City</label>
//     <input type="text" placeholder="Enter your Last name" value="${info.address.city}">
//     <label>Zip code</label>
//     <input type="text" name="name" id="name" value="${info.address.zipcode}" placeholder="Name" required>
//     </form>
//   `;
//   container.innerHTML = template;
// }

// var header = document.getElementById("tabs");
// var btns = header.getElementsByClassName("btn");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("act");
//     current[0].className = current[0].className.replace(" act", "");
//     this.className += " act";
//   });
// }

// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// document.getElementById("defaultOpen").click();



// const renderPosts = async () => {

//   let uri = 'https://jsonplaceholder.typicode.com/users/6?_embed=posts';

//   const res = await fetch(uri);
//   const postss = await res.json();
//   console.log(postss);

  
//   let templates = '';
//   postss.posts.forEach(post => {
    
//     templates += `
//         <div class="pos">
//           <h4>${post.title}</h4>
//           <p>${post.body}</p>
//           </div>
//           `
//   });

//   containPosts.innerHTML = templates;
// }

// window.addEventListener('DOMContentLoaded', renderDetails);
// window.addEventListener('DOMContentLoaded', renderPosts);


{/* <a href="/comment.html?id=${post.id}">View Comments</a> */}
{/* <button type="submit" id=${post.id}  onclick="openPopup()">View Comments</button> */}