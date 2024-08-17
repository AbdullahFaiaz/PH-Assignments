import PropTypes from 'prop-types';

const Toast = ({ message }) => {

  return (
    <>

        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
          <div className="bg-green-500 text-black border-solid border-[1px] border-black rounded-xl shadow-lg py-5 px-14">
            <p className='text-2xl'>{message}</p>
          </div>
        </div>
    
    </>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired
};

export default Toast;
