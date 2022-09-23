const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div>
      <img src="/images/photo-1490474504059-bf2db5ab2348.jpg" alt="Chia Fruit Shake" />
      <div>
        Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}

module.exports = home
