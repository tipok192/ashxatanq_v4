import s from "./c.module.css"
function Footer() {


    return (
        <div className={s.white}>
            <div className={s.body}>

                <div className={s.box}>
                    <div className={s.bigBox}>
                    <div className={s.hw1Box}>
                    <h1 className={s.hw1}>Կատարողներ</h1>
                    </div>
                    </div>
                    <div className={s.box2}>

                    <div className={s.smallBox1}>
                    <h4 className={s.hw2}>1) Կայքի հեղինակ և խմբի ղեկավար` Հենրի Գաբրիելյան</h4>
                    <h4 className={s.hw2}>2) Աշխատանքի մոնտաժող` Արամ Խնկիկյան</h4>
                    <h4 className={s.hw2}>3) Լրագրող` Սեյրան Իսրայելյան</h4>
                    <h4 className={s.hw2}>4) Լրագրող` Հարութ Գեգողլյան</h4>
                    </div>
                    <div className={s.smallBox2}>
                    <h4 className={s.hw2}>5) Լրագրող` Վալեր Ղազարյան</h4>
                    <h4 className={s.hw2}>6) Լրագրող` Գագիկ Գասպարյան</h4>
                    <h4 className={s.hw2}>7) Աշխատանքը ներկայացնող` Արման Փայտյան</h4>
                    <h4 className={s.hw2}>8) Խմբի ղեկավար, աշխատանքի ներկայացնող` Հովիկ Աղազարյան</h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;