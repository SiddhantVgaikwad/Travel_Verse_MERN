import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import './booking.css';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        return alert('Please Sign In');
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      navigate('/thank-you');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="booking dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
      <div className="booking__top d-flex align-items-center justify-content-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          ${price} <span className="text-gray-600 dark:text-gray-300">/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center text-gray-900 dark:text-white">
          <i className="ri-star-fill text-yellow-500"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* Booking Form */}
      <div className="booking__form">
        <h5 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Fill Your Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full name"
              id="fullName"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Book At"
              id="bookAt"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </FormGroup>
        </Form>
      </div>

      {/* Booking Bottom */}
      <div className="booking__bottom mt-6">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 bg-transparent">
            <h5 className="d-flex align-items-center gap-1 text-gray-900 dark:text-white">
              RS{price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span className="text-gray-600 dark:text-gray-300">RS{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 bg-transparent">
            <h5 className="text-gray-900 dark:text-white">Service Charge</h5>
            <span className="text-gray-600 dark:text-gray-300">RS{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 bg-transparent">
            <h5 className="text-gray-900 dark:text-white">Total</h5>
            <span className="text-gray-600 dark:text-gray-300">RS{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button
          className="btn primary__btn w-100 mt-4 bg-blue-500 text-white hover:bg-blue-400 dark:bg-orange-500 dark:hover:bg-orange-400 transition-colors duration-300"
          onClick={handleClick}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;