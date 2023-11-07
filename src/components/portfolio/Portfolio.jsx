import {React, useRef} from 'react'
import "./portfolio.scss"
import { motion , useScroll , useSpring, useTransform} from 'framer-motion';

const items = [
  {
    id:1,
    title:"Netflix Clone",
    img:"https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptatem.",
  },
  {
    id:2,
    title:"Fashify",
    img:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptatem.",
  },
  {
    id:3,
    title:"News Ride",
    img:"https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptatem.",
  },
  {
    id:4,
    title:"I-Notebook",
    img:"https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptatem.",
  },
];

const Single = ({item})=>{
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
  });

  const y = useTransform(scrollYProgress,[0,1],[-300,300]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
        <img src={item.img} alt=""/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const Portfolio = () => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}}className="progressBar">

        </motion.div>
      </div>
      {items.map(item=>(
        <Single item ={item} key={item.id}/>
      ))}
    </div>
  )
}
