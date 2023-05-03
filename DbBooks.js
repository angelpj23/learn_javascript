const DbBooks = 
[{
    id: 1,
    title: 'How to Chipear', 
    AuthorId: 1
},
{
    id: 2,
    title: 'The History of The Pepe', 
    AuthorId: 2
},
{
    id: 3,
    title: 'Walking in the ocean', 
    AuthorId: 3
},
{
    id: 4,
    title: 'The Shooter', 
    AuthorId: 4
},
{
    id: 5,
    title: 'The power of all machines', 
    AuthorId: 5
}];

const DbAuthors = 
[{
    id: 1,
    name: 'Alofoke' 
},
{
    id: 2,
    name: 'El Pepe' 
},
{
    id: 3,
    name: 'Potatsio' 
},
{
    id: 4,
    name: 'ete sech' 
},
{
    id: 5,
    name: 'Angel Picasso' 
}];
//la funcion de flecha (=>) recibe todos los valores del array o arreglo
// y compara si es true con la condicion en este caso (Book)
function getBook(id, callbak)
{
    const book = DbBooks.find(book => book.id === id);
// el signo ! niega (si no hay un libro se ejecuta el callbak)
    if(!book)
    {
        const error= new Error();
        error.message("Book not found");
        return callbak(error);
    }
    callbak(null, book);
}

function getAuthor(id, callbak)
{
    const Author = DbAuthors.find(Author => Author.id === id);
    if(!Author)
    {
        const error= new Error();
        error.message("Author not found");
        return callbak(error);
    }
    callbak(null, Author);
}

getBook(4, (error, book) =>
{
    if (error)
    {
        return console.log(error.message);
    }


getAuthor(book.AuthorId, (err, Author) =>
{
    if (error)
    {
        return console.log(error.message);
    }
    console.log(`this book, ${book.title} was written by: ${Author.name}`);
});
    return console.log(book.id, book.title, "Author Id No.", book.AuthorId);
});
//en los callbaks el primer parametro siempre es un error