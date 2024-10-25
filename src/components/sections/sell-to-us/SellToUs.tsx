import { motion } from "framer-motion";

import SellUs1 from "../../../assets/images/Sell-us-1.png";
import SellUs2 from "../../../assets/images/Sell-us-2.png";
import SellUs3 from "../../../assets/images/Sell-us-3.png";

import "../../../styles/SellToUs.scss";

const SellToUs = () => {
  const sell_to_us_data = [
    {
      number: 1,
      text: "Бесплатная онлайн-оценка",
      img: SellUs1
    },
    {
      number: 2,
      text: "Привозите нам или вызовите специалиста",
      img: SellUs2
    },
    {
      number: 3,
      text: "Подпишите договор и получите деньги",
      img: SellUs3
    }
  ];

  return (
    <div className='sell-to-us'>
      <div className='container'>
        <div className='sell-to-us__inner'>
          <h2 className='sell_us_header'>Продайте нам на раз - два - три</h2>
          <div className='sell-to-us__items'>
            {sell_to_us_data.map(({ number, text, img }, index) => (
              <motion.div
                key={number}
                className='sell-to-us__item'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className='sell-to-us__item-number'>{number}</span>
                <span className='sell-to-us__item-text'>{text}</span>
                <img src={img} alt={text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellToUs;
