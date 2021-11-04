import React from 'react';
import BTCPrice from './btcPrice';

const Footer = () => {
    return (
        <footer className="md:col-span-2 lg:col-span-2 flex items-end p-4">
            <BTCPrice />
        </footer>
    )
}

export default Footer;