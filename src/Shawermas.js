import React from 'react'
import Shaverma from './Shaverma'

const Shavermas = ({ shavermas, removeShavermas }) => {
    return (
        <section>
            <div className='title'>
                <h2>Шаурма народів світу</h2>
                <div className='underline'></div>
            </div>
            <div className='list'>
                {shavermas.map((shaverma) => {
                    return (
                        <Shaverma key={shaverma.id} {...shaverma} removeShavermas={removeShavermas} />
                    )
                })}
            </div>
        </section>
    )
}

export default Shavermas
