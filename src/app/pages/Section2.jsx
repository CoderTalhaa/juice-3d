import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import useProductStore from "@/store/productStore";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export default function Section2() {
  const { activeData, handleSwap, data, condition, setCondition } =
    useProductStore();

  return (
    <motion.div
      animate={{ background: activeData.colors.background }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className=""
    >
      <div className="min-h-svh relative  max-w-[calc(100%-6%)] mx-auto  flex justify-center items-center flex-col  ">
        <ProductPage />

        <div className="pt-10 relative z-[2]">
          <div className="flex justify-center items-center gap-3">
            <div
              className={twMerge(
                " cursor-pointer hover:scale-110 transition-all duration-200 overflow-hidden"
              )}
              style={{ borderColor: activeData.colors.h1 }}
              onClick={() => handleSwap("prev")}
            >
              <div>
                <FaArrowLeft size={30} />
              </div>
            </div>
            <h1 className="text-4xl font-obra overflow-hidden">
              <motion.p
                key={activeData.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {activeData.title}
              </motion.p>
            </h1>
            <div
              className=" cursor-pointer hover:scale-110 transition-all duration-200 overflow-hidden"
              style={{ borderColor: activeData.colors.h1 }}
              onClick={() => handleSwap("next")}
            >
              <div>
                <FaArrowRight size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const ProductPage = () => {
  const { activeData: data, condition, setCondition } = useProductStore();

  return (
    <div className="w-full min-h-[550px] grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-3">
      <div className="p-3 flex flex-col items-end text-end gap-10">
        <motion.div
          key={data.heading1 + data.heading2 + data.heading3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col justify-start flex-shrink-0 lg:text-7xl text-4xl"
          style={{ color: data.colors.h1 }}
        >
          <p className="font-obra">{data.heading1}</p>
          <p className="font-obra">
            {data.heading2} <br /> {data.heading3}
          </p>
        </motion.div>

        <div className="flex flex-col justify-start items-end gap-3">
          <motion.p
            key={data.ingredients.ing1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="font-economica text-xl pt-7"
            style={{ color: data.colors.text }}
          >
            INGREDIENTS
          </motion.p>
          <ul
            className="flex flex-col justify-start items-end text-3xl font-economica"
            style={{ color: data.colors.h1 }}
          >
            {Object.values(data.ingredients).map((ingredient, index) => (
              <motion.li
                key={ingredient}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {ingredient}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden relative lg:flex justify-center items-center p-6">
        <div className="rectangle2">
          <div className="rectangle1"></div>
        </div>
      </div>

      <div className="flex flex-col justify-between p-3">
        <motion.div
          key={data.subheading1 + data.subheading2 + data.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-start gap-2 pt-3"
        >
          <div
            className="flex flex-col items-start"
            style={{ color: data.colors.text }}
          >
            <p className="lg:text-5xl text-3xl font-economica">
              {data.subheading1}
            </p>
            <p className="lg:text-5xl text-3xl font-economica">
              {data.subheading2}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p
              className="font-Assistant text-xl leading-tight"
              style={{ color: data.colors.h1 }}
            >
              {data.text}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2">
          {["Alcohol", "VOLUME", "storage", "calories"].map((item, index) => (
            <motion.div
              key={data[item]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="p-2"
            >
              <h2
                className="font-economica text-[23px]"
                style={{ color: data.colors.text }}
              >
                {item.toUpperCase()}
              </h2>
              <p className="font-Acme text-[40px]">{data[item]}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <button className="px-6 py-3 font-Acme border-none rounded-[23px] cursor-pointer text-white bg-darkOrange hover:bg-black hover:text-darkOrange transition-all duration-300 ease-in-out relative z-[2]">
            ORDER NOW
          </button>
        </motion.div>
      </div>
    </div>
  );
};
