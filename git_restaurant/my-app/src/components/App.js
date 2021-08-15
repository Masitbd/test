import React, { Component } from 'react'
import './App.css';
import Books from './Books/Books';

class App extends Component{
  state = {
    books:[
      {
        id:1,
        name: "Study File Structure",
        price:200
      },
      {
        id:2,
        name: "Create Component",
        price:300
      },
      {
        id:3,
        name: "Study State",
        price:400
      }
    ]
  }

  deleteHandler = (id) => {
     let newBooks = this .state.books.filter(book => book.id != id)
     this.setState({
       books: newBooks
     })
  }

  changeHandler = (name, id) => {
    let  newBooks =  this.state.books.map(book => {

      if(id === book.id){
        return {
      ...book,
      name: name
    }
  }
    return book
   })

   this.setState({
     books: newBooks
   })

  }

  render(){
    return ( 
      <div className="App">

        <Books 
          changeHandler = {this.changeHandler.bind(this)} 
          deleteHandler = {this.deleteHandler.bind(this)} 
          books = {this.state.books} />
       
      </div>
    );
  }
}

export default App;