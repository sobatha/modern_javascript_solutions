let found = false
for (let i=0; i<arr.length; i++) {
    if (!found){
        for (let j=0; j<arr.length; j++){
            if (!found) {
                if (arr[i][j] < 0) {
                    found = true
            }
            }
        }

    }
}