const names =[ 'abul','babul','cabul', 'dabul', 'ebul',
'abul','babul','cabul', 'kabul', 'gabul','abul','abul','abul',
'babul','babul','babul', 'dabul',

]


function remoteDuplicate(names){
    const unique = []
    for(let i= 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name)===false){
            unique.push(name)
        }
           
        
        // console.log(name);
        
    }
    return unique;
}
const uniqueNames = remoteDuplicate(names);
console.log(uniqueNames);