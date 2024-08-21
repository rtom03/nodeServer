const { readFile, writeFile } = require('fs');


readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return err
    }
    const first = result
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            return err
        }
        const second = result
        writeFile('./content/result-sync.txt', `Here is the scond file,${first} ${second} `, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        }, { flag: 'a' })


    })

})


