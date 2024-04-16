import './index.css'

export default function Cart(){
    return(
        <div id='cart_section'>
            <div>
                <h2>CARRITO DE COMPRAS</h2>
            </div>
            <div className='table_cart'>
                <div className='flex titles'>
                    <p>DETALLE DEL PRODUCTO</p>
                    <p>CANTIDAD</p>
                    <p>TOTAL</p>
                </div>
                <div className='flex item_cart'>
                    <div className='item_cart_container'>
                        <img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1712093074/funkoshop_img/funkos_items/baby-yoda-1_1_zfbusv.svg" alt="" className='img_item_cart'/>
                        <div>
                            <h4>Baby Yoda Blueball</h4>
                            <p>Star wars</p>
                            <p>precio: $1799.99</p>
                        </div>
                    </div>
                    <div className='stock_cart'>
                        <input type="number" name="stock_input" id="stock_input" placeholder="0"/>
                        <div id="buttons">
                           <button>+</button>
                           <button>-</button>
                        </div>
                    </div>
                    <p>
                        $3599.99
                    </p>
                        <img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1712579012/funkoshop_img/funkos_icons/close_f9wm1k.svg" alt="" className="close_btn"/>
                </div>
            </div>
        </div>
    )
}