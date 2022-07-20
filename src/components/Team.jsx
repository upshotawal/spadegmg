export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Our CashTag</h2>
          <p>
            PLEASE USE OUR CASHTAG LINK FOR DEPOSIT
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-6'>
                <div className='thumbnail'>
                  {' '}
                  <a href={d.link}>
                    <img src={d.img} alt='...' className='team-img' />
                  </a>

                  <div className='caption'>
                    <h4>{d.name}</h4>
                    {/* <p>{d.job}</p> */}
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
