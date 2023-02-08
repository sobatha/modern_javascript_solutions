const toMap = function(obj) {
    const _map = new Map
    for (let key in obj){
        _map.set(key, obj[key])
    }
    return _map
}