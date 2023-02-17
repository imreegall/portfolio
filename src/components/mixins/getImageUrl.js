export default (imagePath) => {
    console.log(imagePath)
    const path = new URL(`/src/assets/images/${imagePath}`, import.meta.url).pathname
    console.log(path)
    return path
}