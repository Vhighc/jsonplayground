
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');
const date = document.querySelector(".time");

const renderUsers = async (term) => {
  console.log(term);
  let uri = 'https://jsonplaceholder.typicode.com/users';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const users = await res.json();
  console.log(users);

  let template = '';
  users.forEach(user => {
    template += `
      <div class="post">
        <h2>${user.name}</h2>
        <a href="/details.html?id=${user.id}">Read more</a>
      </div>
    `
  });

  container.innerHTML = template;
}

// search
// searchForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   renderUsers(searchForm.term.value.trim());
// })

const dateTime = () => {
  const day = new Date().toLocaleString("en-Uk", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    second: "2-digit",
  });
  return day;
};

setInterval(() => {
  date.textContent = dateTime();
}, 1000);
date.textContent = dateTime();

window.addEventListener('DOMContentLoaded', () => renderUsers());

