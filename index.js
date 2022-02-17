const request = require('request')
const username = process.argv[2] || "awslabs"
const url = `https://api.github.com/users/${username}/repos`
let languages = {}
options = {
    'method': 'GET',
    'url': url,
    'headers': {
        "User-Agent": "HuffPost"
    }
};

request(options, (error, response) => {
    if (error)
        return
    const responseJson = JSON.parse(response.body)
    responseJson.forEach(element => {
        if (element.language) {
            if (languages[element.language])
                languages[element.language]++
            else
                languages[element.language] = 1
        }
    });
    printResult(languages)
})

function printResult(result) {
    Object.entries(result).forEach(element => {
        console.log(`${element[0]} , ${element[1]}`)
    })
}