import './Landingpage.css'

// Cover Image
import coverImg from '../../assets/landingpage-img.jpg'

const Landingpage = () => {
    return(
        <section className='landing-page-container'>
            <img src={coverImg} alt="coverimg" className='coverimg' />
            <div className='landingpage-content'>
                <div className='title-content'>
                    <h1>Welcome to <br /> Paradise Nursery</h1>
                    <hr />
                    <p>Where Paradise Meets Serenity</p>
                    <button className='getStartedButton'>Get Started</button>
                </div>
                <div className='about-content'>
                
                </div>
            </div>
        </section>
    )
}

export default Landingpage;