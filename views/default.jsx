const React = require('react')
const { head } = require('../controllers/places')

function Def (html) {
    return(
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
                <footer className="footer">
                    <div className="container text-center">
                        <span className="text-muted">
                            <a href="">My Resume     </a>
                            <a href="">My Portfolio     </a>
                            <a href="">My LinkedIn</a>
                        </span>
                    </div>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def