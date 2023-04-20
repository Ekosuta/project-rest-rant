const React = require('react')
const Def = require('./default')

function home () {
    return(
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/spicy-food-layout.jpg" alt="Spicy Feast" />
                    <div>
                        Photo by <a href="https://unsplash.com/@lvnatikk">Lily Banse</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
            </main>
            <a href="/places">
                <button className='btn-primary'>Places Page</button>
            </a>
        </Def>
    )
}

module.exports = home