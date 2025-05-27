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
                    <h3>Weclome to Paradise Nursery, where green meets serenity!</h3>
                    <p>Paradise Nursery is your peaceful escape into the world of plants. We specialize in offering a curated selection of lush, vibrant greenery designed to bring life and calm into any space.</p>
                    <p>Whether you're looking for low-maintenance indoor plants, eye-catching outdoor varieties, or thoughtful plant care tips, our collection makes it easy to create your own green oasis. Every plant is hand-selected to ensure quality, beauty, and ease of care.</p>
                    <p>At Paradise Nursery, we believe that surrounding yourself with nature brings balance and joy. Explore our collection and discover how paradise green can bring serenity to your home.</p>
                </div>
            </div>
        </section>
    )
}

export default Landingpage;