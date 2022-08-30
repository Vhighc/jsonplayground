const containPhotos = document.querySelector('.photos');
const id = new URLSearchParams(window.location.search).get('id');
const uri = 'https://jsonplaceholder.typicode.com';

const renderPhotos = async () => {
  const res = await fetch(`${uri}/albums/${id}?_embed=photos`);
  const albumPhotos = await res.json();
  console.log(albumPhotos);

    let allPhotos = '';
    albumPhotos.photos.forEach(photo => {

        allPhotos += `
    <figure>
        <a target="_blank" href=${photo.url}>
        <img class="" src=${photo.thumbnailUrl} alt=${photo.title}>
        </a>
        <figcaption class="">${photo.title}</figcaption>
    </figure>  
    `
    });
  containPhotos.innerHTML = allPhotos;
}
window.addEventListener('DOMContentLoaded', renderPhotos);
