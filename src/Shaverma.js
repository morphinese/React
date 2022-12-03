import React from 'react'

const Shaverma = ({ id, image, info, name, removeShaverma }) => {
    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                </div>
                <p>{info}</p>
                <button
                    className='delete-btn'
                    onClick={() => removeShaverma(id)}
                >
                    Не цікаво
                </button>
            </footer>
        </article>
    )
}

export default Shaverma
