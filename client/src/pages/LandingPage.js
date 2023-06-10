import React, {useState} from 'react'
import { useSpring, animated, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import career from '../media/babe.svg'
import Header from '../components/Header';
import { Link } from 'react-router-dom';



function LandingPage() {


  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const isButtonDisabled = category === '';

  const [ref, inView] = useInView({
    threshold: 0.2 // Change this value as per your requirement
  });

  const cardAnimations = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 1 },
    config: { duration: 500, delay: 200 }
  });
  

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500, delay: 200 }
  });

  
  return (
  <div >
    <Header/>
    <div className="banner-area">
   
    <section className="mainy container">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 mt-6">
        <animated.div className="main-content-area" ref={ref} style={fadeIn}>
          <h1 className="main-heading">Empowering Expecting Mothers for Optimal Health</h1>
          <p className="gray main-sub-text">We're here to support you on your pregnancy journey with personalized and convenient care. Our system ensures a healthy and fulfilling pregnancy for both you and your baby.</p>

          <Link to="/register">
          <button className='btn btn-md btn-primary mt-4'>Get Started</button>
          </Link>  
        </animated.div>
      </div>
      <div className="col-md-6">
        <img src={career} className="img-fluid im" />
      </div>
     
    </div>
  </div>
  <center className="under-text center">
            <p className="gray border-around">Powered By the birthright Team</p>
          </center>
</section>

       
    </div>

   

   
    <div className="bg-2">

  
   
   

    

   
    </div>
    </div>
  )
}

export default LandingPage;