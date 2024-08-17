const getStoredReadBook = () =>{
    const storedReadBook = localStorage.getItem('read-books')
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBook = id =>{
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(bookId=> bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
    }
}

const getStoredWishBook = () =>{
    const storedWishBook = localStorage.getItem('wish-books')
    if(storedWishBook){
        return JSON.parse(storedWishBook);
    }
    return [];
}

const saveWishBook = id =>{
    const storedWishBooks = getStoredWishBook();
    const exists = storedWishBooks.find(bookId=> bookId === id);
    if(!exists){
        storedWishBooks.push(id);
        localStorage.setItem('wish-books', JSON.stringify(storedWishBooks))
    }
}

export {getStoredReadBook,saveReadBook,saveWishBook,getStoredWishBook}

