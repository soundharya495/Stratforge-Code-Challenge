import React from 'react'
import {Link} from 'react-router-dom'

const HomeSection = ({
    name,
    image,
    title,
    content,
    buttonText,
    buttonLink
}) => {
    return (
        <section className={name} style={{background: `url(${image})`}}>
        <div className="container">
          <div className="title">
            {title}
          </div>
          <div className="content">
          {content}
          </div>
          <Link to={buttonLink} className="btn">{buttonText}</Link>
        </div>
      </section>
    )
}

export default HomeSection
