import { Link } from 'react-router-dom';
import successGif from '../assets/successAnimation.gif';

const Success = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-evenly items-center">
        <p class="text-2xl ...">Yippe! Order Successfully Placed...</p>
        <img src={successGif} className="rounded-full w-40 h-40" alt="" />
        <Link to="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg
            class="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default Success;
