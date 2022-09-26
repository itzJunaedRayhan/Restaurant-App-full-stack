import React, { useState } from 'react';
import Logo from '../images/logo.png';
import {MdShoppingBasket, MdLogout, MdAdd} from 'react-icons/md';
import Avatar from '../images/avatar.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user}, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const {user: {providerData}} = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type : actionType.SET_USER,
                user : providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    }

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type : actionType.SET_USER,
            user : null,
        });
    }

    return (
        <header className='fixed z-50 w-screen p-3 px-4 bg-primary md:p-6 md:px-16'>
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full justify-between items-center'>
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>

                <div className='flex items-center gap-8'>
                    <motion.ul initial={{opacity: 0, x: 200}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 200}} className='flex items-center gap-8 ml-auto'>
                        <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100' onClick={() => setIsMenu(false)}>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100' onClick={() => setIsMenu(false)}>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100' onClick={() => setIsMenu(false)}>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100' onClick={() => setIsMenu(false)}>Services</li>
                    </motion.ul>

                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <motion.img 
                        whileTap={{scale: 0.6}} 
                        src={user ? user.photoURL : Avatar} 
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                        alt="userProfile" 
                        onClick={login} 
                        />

                        {
                            isMenu && (
                                <motion.ul animate ={{opacity: 1, scale : 1}} exit={{opacity: 0, scale : 0.6}} initial={{opacity: 0, scale : 0.6}} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-12'>      
                                    {user && user.email === "junaedislam96@gmail.com" && (
                                        <Link to={'/createItem'}><li className='px-4 py-2 flex items-center gap-3 cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-100' onClick={() => setIsMenu(false)}>New Item <MdAdd/></li></Link>
                                    )}
                                    <li className='px-4 py-2 flex items-center gap-3 cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-100' onClick={logout}>Logout <MdLogout/></li>
                                </motion.ul>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className='flex items-center justify-between md:hidden w-full h-full'>
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>
                
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>

                <div className='relative'>
                    <motion.img 
                    whileTap={{scale: 0.6}} 
                    src={user ? user.photoURL : Avatar} 
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                    alt="userProfile" 
                    onClick={login} 
                    />

                    {
                        isMenu && (
                            <motion.ul animate ={{opacity: 1, scale : 1}} exit={{opacity: 0, scale : 0.6}} initial={{opacity: 0, scale : 0.6}} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-12'>      
                                {user && user.email === "junaedislam96@gmail.com" && (
                                    <Link to={'/createItem'}><li className='px-4 py-2 flex items-center gap-3 cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-100' onClick={() => setIsMenu(false)}>New Item <MdAdd/></li></Link>
                                )}
                                <ul className='flex flex-col'>
                                    <li className='px-4 py-2 text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100 hover:bg-slate-100' onClick={() => setIsMenu(false)}>Home</li>
                                    <li className='px-4 py-2 text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100 hover:bg-slate-100' onClick={() => setIsMenu(false)}>Menu</li>
                                    <li className='px-4 py-2 text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100 hover:bg-slate-100' onClick={() => setIsMenu(false)}>About Us</li>
                                    <li className='px-4 py-2 text-base text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer duration-100 hover:bg-slate-100' onClick={() => setIsMenu(false)}>Services</li>
                                </ul>
                                <li className='m-2 p-2 rounded-md flex items-center gap-3 cursor-pointer transition-all duration-100 ease-in-out text-textColor bg-gray-200 text-base hover:bg-gray-300' onClick={logout}>Logout <MdLogout/></li>
                            </motion.ul>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;