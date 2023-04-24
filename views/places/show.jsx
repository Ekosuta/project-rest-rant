const React = require('react')
const Def = require('../default')

function show(data) {
    return(
        <Def>
            <main>
                <div className='container text-center'>
                    <h1>{data.place.name}</h1>
                </div>
                <div className='container text-center row'>
                    <div className='col'>
                        <img src={data.place.pic} />
                    </div>
                    <div className='col'>
                        <div className='card'>
                            <h2 className='card-title'>Rating</h2>
                            <h5 className='card-text'>Currently Unrated</h5>
                        </div>
                        <div className='card'>
                            <h2 className='card-title'>Description</h2>
                            <h5 className='card-text'>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h5>
                        </div>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className='container text-center'>
                    <h2>Comment</h2>
                    <h5>No comments yet!</h5> 
                </div>
            </main>
        </Def>
    )
}

module.exports = show 