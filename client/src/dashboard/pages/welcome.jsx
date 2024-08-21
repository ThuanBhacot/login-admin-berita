import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const welcome = () => {


    return (
        <div className="h-[100vh] bg-black flex justify-center items-center">
            <div className=" text-white font-semibold justify-center items-center">
                <div className=" text-center">
                    <div className='text-3xl '>
                    WELCOME ADMIN
                    </div>
                    <div className='h-[60px] mt-2 w-[300px] text-center relative'>
                        <img src={Logo}></img>
                    </div>
                    <div className='text-2xl'>
                        Berita Nasional Indonesia
                    </div>
                </div>
                <div className="text-center text-black mt-5">
                    <button className='bg-blue-600 h-[50px] w-[200px] rounded-md hover:bg-blue-900 hover:text-white'>
                        <Link to='/login'>LOGIN</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default welcome