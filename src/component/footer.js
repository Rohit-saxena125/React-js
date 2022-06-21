import React from 'react';
import '../css/homepage.css';
import labels from "../labels/labels";
import data from '../constants/constants';
function Footer()
{
    return(
            <div id='footer'>
                {data.footer.text}
                <div>
                    <a href='#'>
                        <button className="btn btn-primary" type='button'>{labels.button_footer.btn1}
                        </button></a>
                    <a href='#'><button className='btn btn-primary'type='button'>{labels.button_footer.btn2}</button>
                    </a>
                </div>
            </div>
    );
}
export default Footer;