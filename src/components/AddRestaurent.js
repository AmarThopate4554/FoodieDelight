import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addRestaurant } from '../services/restaurentService';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const RestaurantSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
});

const AddRestaurant = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    addRestaurant(values)
      .then(response => {
        setSubmitting(false);
        navigate('/');
      })
      .catch(error => {
        setSubmitting(false);
        console.error('Error adding restaurant:', error);
      });
  };

  return (
    <Formik
      initialValues={{ name: '', description: '', location: '' }}
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
          <button type="submit" disabled={isSubmitting}>Add Restaurant</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddRestaurant;
