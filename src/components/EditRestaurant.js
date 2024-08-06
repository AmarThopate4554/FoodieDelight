import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { editRestaurant, getRestaurant } from '../services/restaurentService';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/styles.css';

const RestaurantSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
});

const EditRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRestaurant(id)
      .then(response => setRestaurant(response.data))
      .catch(error => console.error('Error fetching restaurant:', error));
  }, [id]);

  const handleSubmit = (values, { setSubmitting }) => {
    editRestaurant(id, values)
      .then(response => {
        setSubmitting(false);
        navigate('/');
      })
      .catch(error => {
        setSubmitting(false);
        console.error('Error editing restaurant:', error);
      });
  };

  return (
    restaurant && (
      <Formik
        initialValues={restaurant}
        validationSchema={RestaurantSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field name="description" placeholder="Description" />
              <ErrorMessage name="description" component="div" />
            </div>
            <div>
              <Field name="location" placeholder="Location" />
              <ErrorMessage name="location" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Edit Restaurant</button>
          </Form>
        )}
      </Formik>
    )
  );
};

export default EditRestaurant;
