import React from 'react'

export default function BrandLogo() {
    return (
        <div>
            {/* Brand logo image is shown only over large screen */}
            <a href="/" target='_blank' rel="noopener noreferrer"><img src="images/logo.png" alt="BrandLogo" className='img-fluid d-none d-lg-block'/></a>
        </div>
    )
}
