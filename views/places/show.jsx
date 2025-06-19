const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No Comments Yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return(
                <div className='card'>
                    <h2 key="rant" className='rant'>{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return(
        <Def>
            <main>
                <div className='container text-center'>
                    <h1>{data.place.name}</h1>
                </div>
                <div className='container text-center row'>
                    <div className='col'>
                        <img src={data.place.pic} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className='col'>
                        <div className='card'>
                            <h2 className='card-title'>Rating</h2>
                            <h5 className='card-text'>Currently Unrated</h5>
                        </div>
                        <div className='card'>
                            <h2 className='card-title'>Description</h2>
                            <h3>{data.place.showEstablished()}</h3>
                            <h5>Serving {data.place.cuisines}</h5>
                        </div>
                        <div className='container text-center row'>
                            <div className='col-sm-6'>
                                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning col-sm-6'>
                                    Edit
                                </a>
                            </div>
                            <div className='col-sm-6'>
                                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                                    <button type='submit' className='btn btn-danger col-sm-6'>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div id="rant-card" className='container text-center'>
                    <h2>Comments</h2>
                    {comments}
                </div>
                <hr />
                <div id='rant-card' className='container text-center'>
                    <h2>Got Your Own Rant or Rave?</h2>
                    <form id="form" action={`/places/${data.place.id}/comment`} method='POST'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <label htmlFor="author">Author</label>
                            <input type="text" name="author" id="author" className='form-control'/>
                        </div>
                        <div className='col-sm-4'>
                            <label htmlFor="stars">Star Rating</label>
                            <input type="range" className='form-range' min={0} max={5} step={0.5} id='stars' name='stars'/>
                        </div>
                        <div className='col-sm-2 form-check'>
                            <label htmlFor="rant" className='form-check-label'>Rant?</label>
                            <input type="checkbox" name="rant" id="rant" className='form-check-input form-control'/>
                        </div>
                    </div>
                    <div className='row'>
                        <label htmlFor="content" >Comment</label>
                        <input type="textarea" name='content' id='content' className='form-control'/>
                    </div>
                    <input type="submit" className='btn btn-primary' id="submit-btn" value="Add Comment"/>
                </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show 