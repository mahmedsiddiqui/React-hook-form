import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AdmissionForm.module.css';

const AdmissionForm = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
     alert("Registered succesfully")
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id='set' className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Admission Form</h2>

        <div className={styles.profilePhoto}>
          {profilePhoto && <img src={profilePhoto} alt="Profile Preview" />}
          <input
            type="file"
            accept="image/*"
            {...register('profilePhoto', { required: 'Profile photo is required' })}
            onChange={handleFileChange}
          />
          {errors.profilePhoto && <span className={styles.error}>{errors.profilePhoto.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email is not valid',
              },
            })}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits',
              },
            })}
          />
          {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth', { required: 'Date of birth is required' })}
          />
          {errors.dateOfBirth && <span className={styles.error}>{errors.dateOfBirth.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender</label>
          <select id="gender" {...register('gender', { required: 'Gender is required' })}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className={styles.error}>{errors.gender.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            {...register('address', { required: 'Address is required' })}
          />
          {errors.address && <span className={styles.error}>{errors.address.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course">Course of Interest</label>
          <select id="course" {...register('course', { required: 'Course is required' })}>
            <option value="">Select</option>
            <option value="computer-science">Computer Science</option>
            <option value="business">Business</option>
            <option value="arts">Arts</option>
          </select>
          {errors.course && <span className={styles.error}>{errors.course.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
