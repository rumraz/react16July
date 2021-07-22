import React from 'react'
import Item from './item'

function cards() {
    let itemlist = {
        item1: {
            image: "https://placebear.com/640/360",
            description: "A cake is a sweet food made by baking a mixture of flour, eggs, sugar, and fat in an oven. Cakes may be large and cut into slices or small and intended for one person only",
            price: "RS 240"
        },
        item2: {
            image: "https://placebear.com/640/360",
            description: "A cake is a sweet food made by baking a mixture of flour, eggs, sugar, and fat in an oven. Cakes may be large and cut into slices or small and intended for one person only",
            price: "RS 320"
        },
        item3: {
            image: "https://placebear.com/640/360",
            description: "A cake is a sweet food made by baking a mixture of flour, eggs, sugar, and fat in an oven. Cakes may be large and cut into slices or small and intended for one person only",
            price: "RS 540"
        },
    }
    return (

        <div class="container">
            <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-lg-4">
                    <Item image={itemlist.item1.image} description={itemlist.item1.description} price={itemlist.item1.price} />
                </div>
                <div className="col-lg-4">
                    <Item image={itemlist.item2.image} description={itemlist.item2.description} price={itemlist.item2.price} />
                </div>
                <div className="col-lg-4">
                    <Item image={itemlist.item3.image} description={itemlist.item3.description} price={itemlist.item3.price} />
                </div>
                <div className="col-lg-6" style={{ marginTop: "20px" }}>
                </div>
            </div>
        </div>

    )
}

export default cards
