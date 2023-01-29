let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function setZero(k) {
    for(let i=0; i<arr.length; i++) {
        switch(i) {
            case k: 
            case k+1:
            case k+2:
                arr[i] = 0
                break
        }
    }   
}
setZero(3)