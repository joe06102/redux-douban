import React from 'react'
import propTypes from 'prop-types'

const Card = ({ title, image, directors, casts, rating }) => {
    return (
        <div style={{
            boxSizing: 'border-box',
            margin: '16px auto',
            boxShadow: '0 0 4px 1px #ccc',
            borderRadius: '4px',
            backgroundColor: '#fff',
            maxWidth: '90%',
            height: '160px',
            overflow: 'hidden'
        }}>
            <img src={image} alt={'poster'} style={{
                float: 'left',
                position: 'relative',
                top: '10%',
                maxHeight: '80%',
                marginLeft: '5%',
            }} />
            <section style={{
                overflow: 'hidden',
                padding: '10px 5%',
                display: 'inline-block',
            }}>
                <h2 style={{ margin: '16px 0', padding: '0' }}>
                    {title}
                    <strong style={{ color: '#f82', padding: '0 16px' }}>{rating}</strong>
                </h2>
                <p>
                    导演：
                    {
                        directors.join(' / ')
                    }
                </p>
                <p>
                    主演：
                    {
                        casts.join(' / ')
                    }
                </p>                
            </section>
        </div>
    )
}

Card.propTypes = {
    title: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    directors: propTypes.arrayOf(propTypes.string).isRequired,
    casts: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Card