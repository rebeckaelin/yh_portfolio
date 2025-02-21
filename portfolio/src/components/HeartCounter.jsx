import { useState } from "react";
import { Heart } from "lucide-react"; // npm install lucide-react
import toast from "react-hot-toast"; // npm install react-hot-toast

const HeartCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    toast.success(`💖 ${count + 1} likes!`);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleClick}
        className="text-white hover:scale-120 transition-transform"
      >
        <Heart size={25} fill="currentColor" stroke="none" />
      </button>
      <p className="font-second text-sm tracking-widest font-extralight text-light ">
        {count}
      </p>
    </div>
  );
};

export default HeartCounter;
