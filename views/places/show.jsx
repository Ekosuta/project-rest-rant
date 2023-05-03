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
                    <h2 className='rant'>{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
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
                                <a href={`/places/${data.id}/edit`} className='btn btn-warning col-sm-6'>
                                    Edit
                                </a>
                            </div>
                            <div className='col-sm-6'>
                                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
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
            </main>
        </Def>
    )
}

module.exports = show 