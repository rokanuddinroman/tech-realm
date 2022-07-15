import React from 'react';
import Logo from '../static/857528878.png'
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    const styles = {
        wrapper: " border-t-[1px] border-gray-200 py-4",
        content: "max-w-[1250px] mx-auto",
        links: "mx-2"
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className='flex justify-between items-center'>
                    <Image src={Logo}></Image>
                    <div className='space-x-5'>
                        <Link href="" className='links'>About Us</Link>
                        <Link href="" className='links'>Contact Us</Link>
                        <Link href="" className='links'>Privacy Policy</Link>
                        <Link href="" className='links'>Technology</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;