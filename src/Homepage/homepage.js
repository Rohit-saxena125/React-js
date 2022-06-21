
import React from 'react';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import Increment from '../component/increment';
import Decrement from '../component/decrement';
function Homepage(){
return (
    <div className='homepage'>
        <Navbar />
        <Increment />
        <Decrement />
        <Footer />
    </div>
);

}
export default Homepage;