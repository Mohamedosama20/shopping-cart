import React from 'react'
import {Stack, Button} from 'react-bootstrap'
import storeitems from '../data/storeitems.json'
import FormatCurrency from '../components/formatcurrency.js'
import {useShoppingCart} from '../context/ShoppingCartContext'

const CartItem = ({id, quantity}) => {
    const {ItemRemoveCart} = useShoppingCart();
    const item = storeitems.find((i) => i.id === id)
    if (item == null) return null;
  return (
    <Stack 
    direction ='horizontal' 
    gap ={2} 
    className= 'd-flex align-items-center '> 
    <img src={item.imgUrl} alt='cart-img' 
    style = {{width:'125px', height: '75px', objectFit: 'cover' }}
    />
    <div className="me-auto">
    <div> 
    {item.name} {' '} 
    {quantity > 1 && (<span className='text-muted' style = {{
        fontsize: '0.65rem'
    }}>x{quantity} </span>)} 
<div className='text-muted' style = {{fontsize: '0.75rem'}}> 
{FormatCurrency(item.price)} 
</div>

    </div>
     
     </div>
     <div> 
     {FormatCurrency(item.price * quantity)} 
     </div>
     <Button variant = 'outline-danger' size= 'sm' onClick={() => ItemRemoveCart(id) }>
     &times; 
     </Button>
    </Stack>
  )
}

export default CartItem