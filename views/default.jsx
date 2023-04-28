const React = require('react')
const { head } = require('../controllers/placesController')

function Def (html) {
    return(
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <footer className="footer">
                    <div className="container text-center">
                        <ul>
                            <li>
                                <a href="">My Resume     </a>
                            </li>
                            <li>
                                <a href="">My Portfolio     </a>
                            </li>
                            <li>
                                <a href="">My LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def