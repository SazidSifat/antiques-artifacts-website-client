import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-base-300 text-base-content heading font-semibold">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex  space-x-3 lg:justify-start">
                        <span className="self-center text-2xl heading font-semibold">Antiques<span className='text-primary'>.</span> </span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase ">Links</h3>
                        <ul className="space-y-1 flex flex-col">
                            <Link className='py-1 hover:text-primary' to='/'>Home</Link>
                            <Link className='py-1 hover:text-primary' to='/all-artifacts'>All Artifacts</Link>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase ">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to='/about' className='py-1 hover:text-primary'>About</Link>
                            </li>
                            <li>
                                <Link to='/about' className='py-1 hover:text-primary'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <div className="uppercase ">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/" title="Facebook" className="flex items-center p-1">
                                <FaFacebook size={25} />
                            </a>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.x.com/" title="Twitter" className="flex items-center p-1">
                                <BsTwitterX size={25} />
                            </a>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/" title="Instagram" className="flex items-center p-1">
                                <FaInstagram size={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-base-content">© {new Date().getFullYear()} Antiques. All rights reserved.</div>
        </footer>
    );
};

export default Footer;