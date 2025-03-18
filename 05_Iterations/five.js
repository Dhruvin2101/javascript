//for - each loop

const coding = ['ruby', 'js', 'css', 'python']

coding.forEach(function(item){
    console.log(item)
})

coding.forEach((item) => {
    console.log(item)
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)


//     -----------------

const myCoding = [
    {
    languageName: 'javascript',
    languageFileName: 'js'
    },
    {
    languageName: 'java',
    languageFileName: 'jjava'
    },
    {
    languageName: 'python',
    languageFileName: 'py'
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName)
})