import style from "@/Styles/Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={style.containerFooter}>
        <div className={style.containerDH}>
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" />
        </div>
        <div className={style.student}>
          <p>José Santiago</p>
        </div>
        <div className={style.containerRedes}>
          <img src="/images/ico-facebook.png" alt="ico-facebook" />
          <img src="/images/ico-instagram.png" alt="ico-instagram" />
          <img src="/images/ico-tiktok.png" alt="ico-tiktok" />
          <img src="/images/ico-whatsapp.png" alt="ico-whatsapp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
