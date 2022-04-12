import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black pb-2'>
            <div className='grid lg:grid-cols-4 gap-10 pt-8 lg:text-justify px-8  lg:px-16'>
                <div>
                    <h1 className='text-xl font-semibold text-white'>Your Account</h1>
                    <div className='flex flex-col flex-wrap text-gray-600 my-3'>
                        <a href="@personalinfo"> Personal info</a>
                        <a href="@orders"> Orders</a>
                        <a href="@credit">  Credit slips</a>
                        <a href="@address">Addresses</a>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-white mb-3'>Customer Service</h1>
                    <p className='text-gray-600 mt-2'>Monday to Friday</p>
                    <p className='text-gray-600'>10am - 6.30pm (BD time)</p>
                    <p className='text-gray-600'>+(001) 23 45 67 89</p>
                    <a className='text-gray-600' href="mailto:abc4563@gmail.com"> abc453@gmail.com</a>

                </div>
                <div>
                    <h1 className='text-xl font-semibold text-white mb-2 mt-2'>OUR GUARANTEES</h1>
                    <p className='text-gray-600'>Shipping in 3 days</p>
                    <p className='text-gray-600'>Free returns within 14 days</p>
                    <p className='text-gray-600'>Secure payments</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-white'>Our Company</h1>
                    <div className='flex flex-col flex-wrap text-gray-600 my-2'>
                        <a href="/delivery">Delivery</a>
                        <a href="/legalnotice">Legal Notice</a>
                        <a href="/aboutus">About Us</a>
                        <a href="/contactus">Contact Us</a>
                        <a href="/terms">Terms and conditions of use</a></div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-2 px-8 lg:text-justify '>
                    <p className='text-gray-600'>© 2022. Powered by Anik</p>
                    <div className='flex flex-row flex-wrap justify-center'>
                        <img src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="" height={18} />
                        <img src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/bitcoin-e41278677541fc32b8d2e7fa41e61aaab2935151a6048a1d8d341162f5b93a0a.svg" alt="" height={18} />
                        <img src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg" alt="" height={18} />
                        <img src="//cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/jcb-ab0f5a1739704f1ab039f19ac8c28895af5c39a3f54ee9b748ea051986b0bd36.svg" alt="" height={18} />
                    </div>
                    <div>
                    <div className='text-white flex flex-row flex-warp justify-center'>
                        <a className="px-1" href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                        <a className="px-1" href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a className="px-1" href="#facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="px-1" href="#instragram"><i className="fab fa-instagram"></i></a>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;