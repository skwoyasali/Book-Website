
import BookList from './Components/BookList'
import { books } from './utils/mockdatta'
import './App.css'
import Search from './Components/Search'
import { useState } from 'react'
import Header from './Components/Header'
 
function App() {

  const [filteredBook, setFilteredBook] = useState(books);

return (
    <>
    <Header />
    <Search setFilteredBook={setFilteredBook} />
    <BookList booksData ={filteredBook}/>
    </>
  )
}

export default App;
