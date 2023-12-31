import { motion } from "framer-motion"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What are my technical skills</p>
        <h2 className={styles.sectionHeadText}>Techstack.</h2>
    </motion.div>
    <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technogy) => (
        <div className="drop-shadow-[0_10px_10px_rgba(157,151,175,0.8)] w-28 h-28" key={technogy.name}>
          <img src={technogy.icon}></img>
          {/* <BallCanvas icon={technogy.icon} /> */}
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"")