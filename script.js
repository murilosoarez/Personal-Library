document.addEventListener('DOMContentLoaded', () => {

    const bookcase = document.getElementById('bookcase')

    let library = [

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 
        
        {'Title': 'Vision',
        'Author': 'MK', 
        'Pages' : '200'},

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 
        
        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 

        {'Title': 'Harry Potter',
        'Author': 'JK Rowling',
        'Pages': '200'}, 



    ]

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

    createNewBook(library)
    
    
})