Person.sort((a, b) => {
    if (a.lastName > b.lastName) return 1;
    if (a.lastName < b.lastName) return -1;
    else return 0;    
}).sort((a, b) => {
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
    else return 0;
})