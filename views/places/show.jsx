const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2> Rating</h2>
            <p>Currently Unrated</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">Delete</button>
            </form> 
            <hr width="950px;" size="5"></hr>
            <h2>Comments!</h2>
            <p>No Comments yet!</p>    
          </main>
        </Def>
    )
}

module.exports = show
