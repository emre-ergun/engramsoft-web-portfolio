import { useRef, useState } from 'react';
import { useSectionInView } from '../../lib/hooks';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const resetDataAndGoHome = () => {
    setFormData({ email: '', message: '' });
    scrollTo(0, 0);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setPending(true);
    emailjs
      .sendForm('service_jp9ahs4', 'template_fpkj3qm', formRef.current!, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY_EMAIL_JS,
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
          setPending(false);
          resetDataAndGoHome();
        },
        error => {
          toast.error(error.text.split('.')[0] + '!');
          setPending(false);
        }
      );
  };

  return (
    <motion.section
      id='contact'
      className='mb-28 sm:mb-40 w-[min(100%,38rem)] text-center scroll-mt-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader title='Contact me' />
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:pvt.emreergun@gmail.com'>
          pvt.emreergun@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        ref={formRef}
        className='mt-10 flex flex-col dark:text-black'
        onSubmit={sendEmail}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          required
          maxLength={5000}
        />
        <button
          ref={ref}
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65'
          disabled={pending}
        >
          {pending ? (
            <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
          ) : (
            <>
              Submit{' '}
              <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
