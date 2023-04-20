const React = require('react')
const Def = require('../default')

function new_form() {
    return(
        <Def>
            <main>
                <h1>Add a New Place!</h1>
                <form action="/places" method='POST'>
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>
                        <input name="name" id="name" className="form-control" required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input name="pic" id="pic" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input name="cit" id="city" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <input name="state" id="state" className="form-control" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input name="cuisines" id="cuisines" className="form-control" required/>
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form