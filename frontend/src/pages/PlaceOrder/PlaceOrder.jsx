<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
const PlaceOrder = () => {

    const{getTotalCartAmount,token,food_list,cartItems,URL} = useContext(StoreContext);
    const [data,setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:"",
    })

    const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async (event)=>{
      event.preventDefault();
      let orderItems =[];
      food_list.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo = {...item};
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2,

      }
      let response = await axios.post(URL+"/api/order/place",orderData,{headers:{token}})
      if(response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
      else{
        alert("Error");
      }
    }

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
          <input required name='lastName' onChange={onChangeHandler} value = {data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email"placeholder='email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip-Code'/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
=======
import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

    const{getTotalCartAmount} = useContext(StoreContext);
  return (
    <form  className="place-order">
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email"placeholder='email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip-Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
>>>>>>> 75a5fe24430f34f5b77ac6c05b799ed437295f27
      </div>
      <div className='place-order-right'>
         <div className="cart-total">
                <h2> Cart Totals</h2>
                <div>
                     <div className="cart-total-details">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery fee</p>
                        <p>${getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                    </div>
                   
                </div>
<<<<<<< HEAD
                 <button type='submit' >PROCEED TO PAYMENT</button>
=======
                 <button >PROCEED TO PAYMENT</button>
>>>>>>> 75a5fe24430f34f5b77ac6c05b799ed437295f27
            </div>
      </div>
    </form>
  )
}

export default PlaceOrder