const Hero = () => {
    return (
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET TDESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-button">
                    <button>Shop now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Available on</p>


                    <div className="brand-icons">
                        <img src="/images/amazon.png" />
                        <img src="/images/flipkart.png" />
                    </div>
                </div>

                </div>
                <div className="hero-image">
                    <img src="/images/hero-image.png" />
                </div>

            </main>
        </>
    )
}
export default Hero