const fs=require('fs');


fs.readFile('README.md','utf-8', (err,data)=>{
    const lines = data.split(/\r?\n/);
    console.log(lines)
        // lines.forEach(line => {
        //   /*   resultado= line.match(keywords);
        //     if (resultado) */
        //     console.log('text', line);   
        // })
})
/* console.log('resulto');  */