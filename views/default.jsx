const React = require('react')
const { head } = require('../controllers/places')

function Def (html) {
    return(
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def