import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import FormField from './shared/FormField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  let disabledSubmit = form.name === '' || form.email === '' || form.message === '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          to_name: 'Roberto',
          from_email: form.email,
          to_email: 'rcastellong98@gmail.com',
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(() => {
        setLoading(false);
        toast.success('Thank you. I will get back to you as soon as possible!😎.', {
          position: 'top-center',
          className: 'toast-message',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error('Upps...something went wrong!', {
          className: 'toast-message',
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden '>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <FormField
            placeholder={"What's your name?"}
            fieldName={'name'}
            handleChange={handleChange}
            value={form.name}
            label={'Your Name'}
          />

          <FormField
            placeholder={"What's your email?"}
            fieldName={'email'}
            handleChange={handleChange}
            value={form.email}
            label={'Your Email'}
            fieldType='email'
          />

          <FormField
            placeholder={'What do you want to say?'}
            fieldName={'message'}
            handleChange={handleChange}
            value={form.message}
            label={'Your Message'}
            isTextarea
          />

          <button
            disabled={disabledSubmit}
            className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ${
              disabledSubmit ? 'opacity-40 cursor-not-allowed' : ''
            } `}
            type='submit'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
      <div className='mt-20'>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
