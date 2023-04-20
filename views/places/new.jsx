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
                        <select name="state" id="state" className="form-control">
                            <option value="filler" selected>Select a State</option>
                            <option value="Alabama">AL</option>
                            <option value="Alaska">AK</option>
                            <option value="Arizona">AZ</option>
                            <option value="Arkansas">AR</option>
                            <option value="California">CA</option>
                            <option value="Colorado">CO</option>
                            <option value="Conneticut">CT</option>
                            <option value="Delaware">DE</option>
                            <option value="Florida">FL</option>
                            <option value="Georgia">GA</option>
                            <option value="Hawaii">HI</option>
                            <option value="Idaho">ID</option>
                            <option value="Illinois">IL</option>
                            <option value="Indiana">IN</option>
                            <option value="Iowa">IA</option>
                            <option value="Kansas">KS</option>
                            <option value="Kentucky">KY</option>
                            <option value="Louisiana">LA</option>
                            <option value="Maine">ME</option>
                            <option value="Maryland">MD</option>
                            <option value="Massachusetts">MA</option>
                            <option value="Michigan">MI</option>
                            <option value="Minnesota">MN</option>
                            <option value="Mississippi">MS</option>
                            <option value="Missouri">MO</option>
                            <option value="Montana">MT</option>
                            <option value="Nebraska">NE</option>
                            <option value="Nevada">NV</option>
                            <option value="New Hampshire">NH</option>
                            <option value="New Jersey">NJ</option>
                            <option value="New Mexico">NM</option>
                            <option value="New York">NY</option>
                            <option value="North Carolina">NC</option>
                            <option value="North Dakota">ND</option>
                            <option value="Ohio">OH</option>
                            <option value="Oklahoma">OK</option>
                            <option value="Oregon">OR</option>
                            <option value="Pennsylvania">PA</option>
                            <option value="Rhode Island">RI</option>
                            <option value="South Carolina">SC</option>
                            <option value="South Dakota">SD</option>
                            <option value="Tennessee">TN</option>
                            <option value="Texas">TX</option>
                            <option value="Utah">UT</option>
                            <option value="Vermont">VT</option>
                            <option value="Virginia">VA</option>
                            <option value="Washington">WA</option>
                            <option value="West Virginia">WV</option>
                            <option value="Wisconsin">WI</option>
                            <option value="Wyoming">WY</option>
                        </select>
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