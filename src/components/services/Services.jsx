import React from 'react' 
import './services.css' 
import listServices from './listServices' 
 
 
export const Services = () => { 
  return ( 
    <section id="services"> 
      <h5>What i offer</h5> 
      <h2>Services 
      <ol> 
<li><a href="network-installation-and-configuration.html">Network installation and configuration</a></li> 
<li><a href="network-security.html">Network security</a></li>  
</ol> 
      </h2> 
      
      <div className="container services__container"> 
        <listServices /> 
      </div> 
    </section> 
  ); 
} 
export default Services;