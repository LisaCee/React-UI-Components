import React, { Component } from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

class HeaderContainer extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return(
            <div>
                <ImageThumbnail />
                {/* <HeaderTitle />
                <HeaderContent /> */}
            </div>
        )
    }
}

export default HeaderContainer;
