document.addEventListener('DOMContentLoaded', () => {
    
    const mainContainer = document.getElementById('main-container')
    const dialogueBox = document.getElementById('dialogue-box')
    const bookcase = document.getElementById('bookcase')
    const newBook = document.getElementById('btn')

    let submit = document.getElementById('submit')
    let close = document.getElementById('close')

    let library = []

    
    function createNewBook(array) {

        
        for (i=0; i < array.length; i++) {
            
            const book = document.createElement('div')
            const bookTitle = document.createElement('div')
            const bookAuthor = document.createElement('div')
            const bookPages = document.createElement('div')
            const bookStatus = document.createElement('label')
            const checkbox = document.createElement('input')
            
            book.className = 'Book'
            bookTitle.className = 'Title'
            bookAuthor.className = 'Author'
            bookPages.className = 'Pages'
            bookStatus.className = 'Status'
            checkbox.setAttribute('type', 'checkbox')
            
            book.append(bookTitle, bookAuthor, bookPages, bookStatus)

            bookTitle.innerHTML = array[i].Title
            bookAuthor.innerHTML = '<strong> Author: </strong>' + array[i].Author
            bookPages.innerHTML = '<strong> Pages: </strong> ' + array[i].Pages
            bookStatus.innerHTML = '<strong> Read? </strong>'
            bookStatus.append(checkbox)

            bookcase.append(book)
        }
    }
    
    newBook.addEventListener('click', () => {
        dialogueBox.style.display = 'block'
        mainContainer.style.filter = 'blur(5px)'
    })

    submit.addEventListener('click', (e) => {

        e.preventDefault()

        let name = document.getElementById('name').value
        let author = document.getElementById('author').value
        let pages = document.getElementById('pages').value
        let checkbox = document.getElementById('checkbox').value

        library.push(
            {'Title': name,
            'Author': author,
            'Pages': pages}
        )

        createNewBook(library)

    })

    close.addEventListener('click', () => {
        dialogueBox.style.display = 'none'
        mainContainer.style.filter = 'blur(0px)'
    })

    createNewBook(library)
    
    
})