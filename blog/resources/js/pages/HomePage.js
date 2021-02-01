import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/homeBanner";


import FreeClassHome from "../components/freeClassHome";


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                    <Menu/>
                    <HomeBanner/>


                     <FreeClassHome/>


            </Fragment>
        );
    }
}

export default HomePage;
