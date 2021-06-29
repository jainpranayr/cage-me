const imgSource = document.getElementsByTagName("img");

const resolutions = ["/400/400", "/g/400/400", "/c/400/400", "/gif/400/400"];

for (let i = 0; i < imgSource.length; i++) {
  const randomResIndex = Math.floor(Math.random() * resolutions.length);
  imgSource[i].src = `https://www.placecage.com/${resolutions[randomResIndex]}`;
}
