import './style.css'
import Buttonn from "../../components/Button";
import PhotoProfile from "../../components/PhotoProfile";
import { faDribbble, faGithub, faGitlab, faLinkedin, faInstagram, faWhatsapp, faFacebook }
    from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Hr from '../../components/Line';
import { Container } from 'react-bootstrap';
import cv from '../../assets/Doc/CV Candra Setiawan.pdf'


export default function Body() {
    return (
        <Container className='py-5'>
            <div style={{ margin: "0 auto" }}>
                <div id='container' className="text-center" style={{ margin: "0 auto" }}>
                    <PhotoProfile />
                    <div className="mb-5">
                        <h5 className="my-2 fw-bold" style={{ color: "#333333" }}>Candra Setiawan</h5>
                        <h5 style={{ fontSize: "0.7em", fontWeight: "bold", color: "#0098B9" }}>I Do Design and Code</h5>
                    </div>
                    <div className="my-4">
                        <h5 className="fw-bold" style={{ color: "#333333" }}>Design</h5>
                        <span>
                            <Buttonn link="https://dribbble.com/DesignByCandra" value="Dribbble" icon={faDribbble} />
                        </span>
                    </div>
                    <Hr />
                    <div className="my-4">
                        <h5 className="fw-bold" style={{ color: "#333333" }}>Code</h5>
                        <Buttonn link="https://github.com/CandraDev23/" value="Github" icon={faGithub} />
                        <Buttonn link="https://gitlab.com/candradev23" value="Gitlab" icon={faGitlab} />
                    </div>
                    <Hr />
                    <div className="my-4">
                        <h5 className="fw-bold" style={{ color: "#333333" }}>About</h5>
                        <a href={cv} download="CV Candra Setiawan" style={{textDecoration: "none"}}>
                            <Buttonn value="Download CV" icon={faAddressCard} />
                        </a>
                        <Buttonn link="https://www.linkedin.com/in/candra-setiawan-783857253/" value="LinkedIn" icon={faLinkedin} />
                    </div>
                    <Hr />
                    <div className="my-4">
                        <h5 className="fw-bold" style={{ color: "#333333" }}>Social Media</h5>
                        <Buttonn link="https://www.instagram.com/can_setiawan/" value="Instagram" icon={faInstagram} />
                        <Buttonn link="https://www.facebook.com/profile.php?id=100069273049209" value="Facebook" icon={faFacebook} />
                    </div>
                    <Hr />
                    <div className="my-4">
                        <h5 className="fw-bold" style={{ color: "#333333" }}>Contact</h5>
                        <Buttonn link="https://wa.me/6285540262762" value="Whatsapp" icon={faWhatsapp} />
                        <Buttonn link="mailto:chan.setiawan42@gmail.com" value="Email" icon={faEnvelope} />
                    </div>
                </div>
            </div>
        </Container>
    );
}