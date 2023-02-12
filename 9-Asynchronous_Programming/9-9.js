async function loadAllImage() {
    const urls = [a, b, c]
    const promises = urls.map(loadImage)

    await Promise.allSettled(promises)
    for (result in results) {
        if (result == 'fulfilled') {
            element.appendChild(result.value)
        } else {
            console.log(Error('Network Error'))
        }
    }    
}