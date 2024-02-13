import s from "./c.module.css"
import gag1 from "../../../audio/gag1.mp4"
import valer2 from "../../../audio/valer1.mp4"
import {motion} from "framer-motion"
function Main2() {
   return (
      <motion.div className={s.div}
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x: window.innerWidth, transition:{duration:0.1}}}
      >
         <div>
            <div className={s.box2}>

               <div className={s.box}>
                  <div className={s.text}>
                     <h2 className={s.hw1}>Ի՞նչն է խնդիրը</h2>
                     <h3 className={s.hw2}>kjwhmotfhbucasiuhdrkjrufnoioghyuvaskdmlgkjcfoigjhklijihrtcyuvgblakfjz;lokinhbkhcxoikpvfl;pbkmgokxnoihsuvfysugfrvhsoiftxgyidhmvfouvl;gokjsdhoulsvhoip futghfdkiyhjgdoipfyikbjkdyghuf</h3>
                  </div>
               </div>

            </div>
            <div className={s.gicdiv}>
               <div className={s.gic}></div>
            </div>
            <div className={s.gicdiv2}>
               <div className={s.gic2}></div>
            </div>
            <h2 className={s.hw1}>Հարցման երկու արդյունք</h2>
            <div className={s.gicdiv2}>
               <div className={s.gic2}></div>
            </div>
            <div className={s.div2}>
               {/* /////////////////////////////// */}
               <div className={s.div3}>
                  <div className={s.box}>
                  <div className={s.hw1}>
                        <h3 className={s.hw3}>Ձայնագրվող` Նարեկ Հարությունյան (աշակերտ)</h3>

                        <h4 className={s.hw3}>Լրագրող` Գագիկ Գասպարյան</h4>
                    </div>
                  </div>
                  <video controls src={gag1} className={s.audio}></video>
               </div>
               {/* /////////////////////////// */}

               <div className={s.gicdiv2}>
                  <div className={s.gic2}></div>
               </div>
               {/* ...................... */}
               <div className={s.div3}>
                  <video controls src={valer2} className={s.audio}></video>
                  <div className={s.box}>
                  <div className={s.hw1}>
                        <h3 className={s.hw3}>Ձայնագրվող` Հայրենյան Գուրգեն (աշակերտ)</h3>

                        <h4 className={s.hw3}>Լրագրող` Վալեր Ղազարյան</h4>
                    </div>
                  </div>
               </div>
               {/* /////////////////////////// */}
               <div className={s.gicdiv2}>
               <div className={s.gic2}></div>
            </div>
            </div>
         </div>
      </motion.div>
   );
}

export default Main2;