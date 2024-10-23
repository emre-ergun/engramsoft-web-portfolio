import { useSectionInView } from '../../lib/hooks';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <section
      id='contact'
      className='mb-28 max-w-[50rem] text-center sm:mb-12 scroll-mt-28'
    >
      <text ref={ref}>Contact</text>
      <div className='h-[1024px] w-32'></div>
    </section>
  );
};

export default Contact;
