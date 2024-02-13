import s from "./c.module.css"
import { Link, } from "react-router-dom";
// import logo from "../../img/logo.png"
// import logo2 from "../../img/logo2.png"
// import logo3 from "../../img/logo3.jpg"
// import logo4 from "../../img/logo4.jpg"
import logo5 from "../../img/196dpr.jpg"
import logo6 from "../../img/logo6.jpg"
import img1 from "../../img/img1.png"
import img2 from "../../img/img2.png"
import { useState } from "react";


function Header() {
    const [page , setPage] = useState("main")

    return (

        <div className={s.white}>

            <div className={s.body}>

                <div className={s.box}>

                    <Link to="/">
                        <div className={s.imgBox3}>
                            <img className={s.img2} src={logo6} alt="logo" />
                            {/* <img className={s.img} src={logo4} alt="logo" /> */}

                        </div>
                    </Link>
                    <Link to="/">
                        <div className={s.imgBox3}>
                            <img className={s.img2} src={logo5} alt="logo" />
                            {/* <img className={s.img} src={logo4} alt="logo" /> */}

                        </div>
                    </Link>
                </div>
                <div className={s.links}>
                    <div className={s.imgBox2} >
                        <img className={s.img} src={img1} alt="-=" />
                    </div>
                    <Link onClick={()=>{setPage("main")}} to="/"><button className={page ==="main"? s.btnb : s.btnw }>Գլխավոր էջ</button></Link>
                    <Link onClick={()=>{setPage("xndir")}} to="/xndir"><button className={page ==="xndir"? s.btnb : s.btnw }>Ի՞նչն է խնդիրը</button></Link>
                    <Link onClick={()=>{setPage("lucum")}} to="/lucum"><button className={page ==="lucum"? s.btnb : s.btnw }>Լուծման տարբերակներ</button></Link>
                    <Link onClick={()=>{setPage("audio")}} to="/audio"><button  className={page ==="audio"? s.btnb : s.btnw }>Հարցազրույց</button></Link>
                    <div className={s.imgBox2}>
                        <img className={s.img} src={img2} alt="=-" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;