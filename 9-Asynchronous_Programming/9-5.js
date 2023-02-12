const addImage = function(url, element) {
    return new Promise ((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('GET', url)
        request.responsetype = 'blob'

        request.addEventListener('load', () => {
            if (request.status == 200){
                const blob = new Blob([request.response], { type: 'image/png' })
                const img = document.createElement('img')
                img.src = URL.createObjectURL(blob)
                element.appendChild(img)
            }  else {
                reject(Error(`${request.status}: ${request.statusText}`))
            }
        })
        request.addEventListener('error', event => reject(Error('Network Error')))
        request.send()
    })
}

addImage(url, imgdiv).resolve()
    .then(addImage(url, imgdiv))
    .then(addImage(url, imgdiv))

