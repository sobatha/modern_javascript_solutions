Promise.allSettled() // { status: 'fulfilled}, value: 値}

const urls = [a, b, c]
const promises = urls.map(loadImage)

Promise.allSettled(promises)
    .then(results => {
        for (result in results) {
            if (result == 'fulfilled') {
                element.appendChild(result.value)
            } else {
                console.log(Error('Network Error'))
            }
        }
    })