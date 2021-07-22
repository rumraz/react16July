import react from 'react'

const Item = (props) => {
    return (

        <div class="card">
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">{props.description}</p>
                <h5 class="card-title">{props.price}</h5>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>

    );
}

export default Item