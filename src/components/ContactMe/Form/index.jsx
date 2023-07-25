import { useState, useRef } from 'react';
import {
  isValidEmail,
  isValidFullName,
} from '../../../utilities/validateInput';
import emailjs from '@emailjs/browser';
import styles from './formStyles.module.scss';
import { ERRORICON, SUCCESSICON } from '../../../assets/images';

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState({
    message: '',
    success: null,
  });

  const [disabled, setDisabled] = useState(false);

  const validateForm = () => {
    let valid = true;
    const { name, email, message } = formData;
    const newErrors = { name: '', email: '', message: '' };

    if (!isValidFullName(name)) {
      newErrors.name = 'please enter full name';
      valid = false;
    }

    if (email.trim() === '') {
      newErrors.email = 'Please enter your email.';
      valid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (message.trim() === '') {
      newErrors.message = 'Please enter your message';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true);
      if (validateForm()) {
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_ID
        );
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setMessage({
          message: 'sent successfully',
          success: true,
        });
        setShowMessage(true);
      } else {
        throw new Error('invalid details');
      }
    } catch (err) {
      setMessage({
        message: `${err.message}`,
        success: false,
      });
      setShowMessage(true);
    } finally {
      setDisabled(false);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (name === 'email') {
      validateEmailField();
    } else {
      validateField(name);
    }
  };

  const validateEmailField = () => {
    const { email } = formData;
    const newErrors = { ...errors };

    if (email.trim() === '') {
      newErrors.email = 'Please enter your email.';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    } else {
      newErrors.email = '';
    }

    setErrors(newErrors);
  };

  const validateField = (fieldName) => {
    let valid = true;
    const fieldValue = formData[fieldName].trim();
    const newErrors = { ...errors };

    if (fieldValue === '') {
      newErrors[fieldName] = `Please enter your ${
        fieldName === 'name' ? 'full name' : fieldName
      }.`;
      valid = false;
    } else {
      newErrors[fieldName] = '';
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
      ref={form}
    >
      {showMessage && (
        <p
          className={`${styles.form__responseMessage} ${
            message.success ? styles.success : styles.error
          }`}
        >
          <span className={styles.form__responseIcon}>
            {message.success ? (
              <img src={SUCCESSICON} alt='succcess-icon' />
            ) : (
              <img src={ERRORICON} alt='error-icon' />
            )}
          </span>
          {message.message}
        </p>
      )}
      <div>
        {errors.name && <p className={styles.form__error}>{errors.name}</p>}
        <input
          type='text'
          name='name'
          placeholder='Full Name'
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div>
        {errors.email && <p className={styles.form__error}>{errors.email}</p>}
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div>
        {errors.message && (
          <p className={styles.form__error}>{errors.message}</p>
        )}
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
      </div>

      <button
        disabled={disabled}
        className={styles.form__button}
        onClick={handleSubmit}
      >
        {disabled ? 'Sending...' : ' Send Message'}
      </button>
    </form>
  );
};

export default Form;
