const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img className='errorCat' src="/images/e6cf1968de1b5117499c429bc37c02de.jpg" alt="Jiji with panda hat" />
                <div>
                  Photo by <a href="https://unsplash.com/@cravethebenefits">Brandon</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
