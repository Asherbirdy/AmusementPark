export default function getImageUrl(name) {
  const path = new URL(`../assets/img/${name}`, import.meta.url).href;
  return path;
}
