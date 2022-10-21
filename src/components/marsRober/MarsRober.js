import React from 'react'

const MarsRober = ({ rober }) => {

    return (
        <div><h2>Mars Rober</h2>

            {rober.map(photo => {

                return (
                    <p>cam: {photo.full_name}</p>
                )
            })}
        </div>


    )
}

export default MarsRober