const wordList = [
    'python',
    'javascript',
    'java',
    'golang',
    'kotlin',
    'mysql',
    'mongodb',
    'fortran',
    'ruby',
    'html',
    'csharp'
]

const randomWord=()=>{
    
    return wordList[Math.floor(Math.random()*wordList.length)]

}

export {randomWord}