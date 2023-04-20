const React = require('react')
const Def = require('./default')

function home () {
    return(
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div className='text-center'>
                    <img src="/images/spicy-food-layout.jpg" alt="Spicy Feast"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@lvnatikk">Lily Banse</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
            </main>
            <div className='text-center'>
                <a href="/places">
                <button className='btn-primary'>Places Page</button>
                </a>
            </div>
            <div className='col-sm-6'>
                <img src="" alt="" />
            </div>
        </Def>
    )
}

module.exports = home