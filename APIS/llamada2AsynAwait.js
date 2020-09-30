btn = document.querySelector("#btnDescargar");
img = document.querySelector("#imgDia");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=yZHgOp98kgW22llcT3Dpyo5XkVNHQFZLFSbBSsYK"
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;