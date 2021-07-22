import react from 'react';

const Carousel = () => {
    var name = "Cake Shop"
    return (
        <div className="carousel-custom" width="100%" height="400px">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/640/360" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://placebear.com/640/360" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="http://placeimg.com/640/360/any" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel