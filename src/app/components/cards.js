import { motion } from "framer-motion";

function Cards(props) {
  return (
    <motion.div
    >
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
        className="flex flex-col items-center justify-center w-full space-y-5 text-white h-[400px] rounded-lg my-5"
        style={{ backgroundColor: props.color }}
      >
        <span className="text-[35px]">{props.icon}</span>
        <h1 className="text-xl font-bold">{props.heading}</h1>
        <p className="px-3 text-center">{props.content}</p>
      </div>
    </motion.div>
  );
}

export default Cards;
