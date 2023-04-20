const React = require('react')
const Def = require('./default')

function error404() {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Sorry, we couldn't find this page.</p>
                <div>
                    <img src="/images/sorry.jpg" alt="Sorry Image"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@brett_jordan">Brett Jordan</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404