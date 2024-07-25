import React from 'react'
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const Rating = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 mb-3 mb-sm-0'>
            <div className="card" style={{ "marginTop": "25%" }}>
              <h5 className="card-header"> Internet of Things  (IoT) </h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a data-bs-toggle="collapse" href="#collapseExample" className="btn btn-light"><FaCircleChevronDown />

                </a>
                <div id='collapseExample' className='collapse'>
                  <h3>user Rating</h3>
                </div>
                <a href='#' className='btn' style={{ "color": " #FFD500 " }}><FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></a>
              </div>
            </div>
          </div>

          <div className='col-sm-6'>
            <div className="card" style={{ "marginTop": "25%" }}>
              <h5 className="card-header"> Programming In Python</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-light"><FaCircleChevronDown />
                </a>
                <a href='#' className='btn' style={{ "color": " #FFD500 " }}><FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></a>
              </div>
            </div>
          </div>


          <div className='col-sm-6'>
            <div className="card" style={{ "marginTop": "15%" }}>
              <h5 className="card-header">Web Development</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-light"><FaCircleChevronDown />
                </a>
                <a href='#' className='btn' style={{ "color": " #FFD500 " }}><FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></a>
              </div>
            </div>
          </div>


          <div className='col-sm-6'>
            <div className="card" style={{ "marginTop": "15%" }}>
              <h5 className="card-header">  Project Training</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-light"><FaCircleChevronDown />
                </a>
                <a href='#' className='btn' style={{ "color": " #FFD500 " }}><FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Rating
