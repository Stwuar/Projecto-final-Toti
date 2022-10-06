import React from "react";
import {BrowserRouter, Routes, Link, Route, } from 'react-router-dom';


function MyMenu() {
    return (
        <div className="apps">
            <nav className="apps-header">
                <ul className="list">
                   
                    <li><a href="https://www.linkedin.com/in/berlincia-saintulien-816603199?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bj%2F%2FHnb3lQHqtvtPsna%2FdnQ%3D%3D" target="blank"> Berlincia </a></li>
                    <li> <a href="https://www.linkedin.com/in/darbis-medina-963839156?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVGiB8xj4QQOdJYfiq2xDDA%3D%3D" target="blank">Darbis</a></li>
                    <li><a href="https://www.linkedin.com/in/mawete-ana-kiala-rafael-b6a210223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKSDYI9fXTriwPR8Jf1yOqA%3D%3D" target="blank"> Mawete </a></li>
                    <li> <a href="https://www.linkedin.com/in/stwuar-carre%C3%B1o-072225243/" target="blank">Stwuar </a></li></ul>
            </nav>
        </div>);
}
export default MyMenu;