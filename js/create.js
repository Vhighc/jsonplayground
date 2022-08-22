const containComments = document.querySelector('.comments');
const id = new URLSearchParams(window.location.search).get('id');
const uri = 'https://jsonplaceholder.typicode.com';

const renderComments = async () => {
  const res = await fetch(`${uri}/posts/${id}?_embed=comments`);
  // if (!res.ok) {
  //   window.location.replace(`/details.html?id=${user.id}`);
  // }
  const postComments = await res.json();
  console.log(postComments);

  let allComments = '';
  postComments.comments.forEach(comment => {
    
    allComments += `
    <h4>${comment.email}</h4>
    <p>${comment.name}</p>
    <p>${comment.body}</p>
    `
  });
  containComments.innerHTML = allComments;
}
window.addEventListener('DOMContentLoaded', renderComments);

