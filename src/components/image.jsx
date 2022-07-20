export const Image = ({ title, link, smallImage }) => {
  return (
    <a href={link}>
      <div className='portfolio-item'>

        <div className='hover-bg'>
          {' '}

          <div className='hover-text'>
            <h4>{title}</h4>
          </div>

          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}

        </div>

      </div>
    </a>
  )
}
