import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";
import { db, doc, getDoc, setDoc, updateDoc } from "../firebase";

const HeartCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const docRef = doc(db, "likes", "heartCount");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      } else {
        await setDoc(docRef, { count: 0 });
      }
    };

    fetchLikes();
  }, []);

  const handleClick = async () => {
    const docRef = doc(db, "likes", "heartCount");

    try {
      await updateDoc(docRef, { count: count + 1 });
      setCount(count + 1);
      toast.success(`💖 ${count + 1} likes!`);
    } catch (error) {
      console.error("Error updating likes:", error);
      toast.error("Något gick fel 😞");
    }
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
