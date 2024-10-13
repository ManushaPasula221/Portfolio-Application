import React from 'react';
import './Certification.css';
import Certification_data from '../../assets/Certification_data';

const Certification = () => {
  return (
    <div id='certification' className='certification'>
        <div className='certification-title'>
            <h2>Certifications</h2>
        </div>
        <div className='certificate-container'>
            {Certification_data.map((certificate, index) => {
                return <div ket={index} className='certificate-format'>
                    <h3>{certificate.no}</h3>
                    <h2>{certificate.name}</h2>
                    <div className='certifition-readmore'>
                        <p>Read more</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Certification