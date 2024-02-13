import s from "./c.module.css"
import {motion} from "framer-motion"

function Main() {
    return ( 
        <motion.div className={s.div}
        initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x: window.innerWidth, transition:{duration:0.1}}}
        >
           <div className={s.box}>
            <div className={s.text}>
               <div>

                 <h2 className={s.hw1}>Հետազոտական աշխատանք</h2>
               </div>
                 <div className={s.text2}>
                 <h3 className={s.hw2}>Ա. Նավասարդյանի անվան թիվ 196 հիմնական դպրոց</h3>
                 <h3 className={s.hw2}>Առարկա` հասարակագիտություն</h3>
                 <h3 className={s.hw2}>Ուսուցչուհի` Ե. Գաբրիելյան</h3>
                 <h3 className={s.hw2}>Հանձնարարություն։ Վերցնել խնդիր և առաջարկել լուծման տարբերակներ</h3>
                 <h3 className={s.hw2}>Խնդիր։ Դպրոցի տարածքի բարեկարգում, ֆուտբոլի դաշտի խոտապատում</h3>
                 </div>
            </div>
           </div>
        </motion.div>
     );
}

export default Main;