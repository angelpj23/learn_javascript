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
async function getBook(id)
{
    const book = DbBooks.find(book => book.id === id);
    if(!book)
    {
        const error= new Error();
        error.message("Book not found");
        throw error;
    }
return book;
}
async function getAuthor(id)
{
    const Author = DbAuthors.find(Author => Author.id === id);
    if(!Author)
    {
        const error= new Error();
        error.message("Author not found");
      throw error;
    }
return Author;
}
async function main()
{
    try{
        const book = await getBook(5);
        const Author = await getAuthor(book.AuthorId);
        console.log(`this book, ${book.title} was written by: ${Author.name}`);
    }
    catch (ex)  
    {
        console.log(ex.message);
    }
}
main();