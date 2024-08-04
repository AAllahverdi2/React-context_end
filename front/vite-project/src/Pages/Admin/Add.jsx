import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import mainContext from '../../Context/Context';
import './Add.scss';

const Add = () => {
  const { data, product, setData, setProduct } = useContext(mainContext);
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      category: '',
      image: '',
      isCount: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      price: Yup.number()
        .required('Required')
        .positive('Price must be a positive number')
        .integer('Price must be an integer'),
      category: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      image: Yup.string()
        .required('Required'),
      isCount: Yup.number()
        .required('Required')
        .positive('Count must be a positive number')
        .integer('Count must be an integer'),
    }),
    onSubmit: values => {
      axios.post('http://localhost:7954/product/', values).then(res => {
        setProduct([...product, res.data]);
        setData([...data, res.data]);
      });
      formik.resetForm();
    },
  });

  return (
    <div className="add-form-container">
      <form onSubmit={formik.handleSubmit} className="add-form">
        <label htmlFor="title">Title</label>
        <input
          placeholder="Name"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error">{formik.errors.title}</div>
        ) : null}

        <label htmlFor="price">Price</label>
        <input
          placeholder="Price"
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="error">{formik.errors.price}</div>
        ) : null}

        <label htmlFor="category">Category</label>
        <input
          placeholder="Category"
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        />
        {formik.touched.category && formik.errors.category ? (
          <div className="error">{formik.errors.category}</div>
        ) : null}

        <label htmlFor="image">Image</label>
        <input
          placeholder="Image URL"
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="error">{formik.errors.image}</div>
        ) : null}

        <label htmlFor="isCount">Discount</label>
        <input
          placeholder="Discount"
          id="isCount"
          name="isCount"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isCount}
        />
        {formik.touched.isCount && formik.errors.isCount ? (
          <div className="error">{formik.errors.isCount}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
