import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Buttonn(props) {
    return (
        <Button id="button1" 
        className='rounded-pill w-100 fs-6 my-2 py-2 d-flex align-items-center justify-content-center gap-3' 
        href={props.link}>
            <span>
                <FontAwesomeIcon icon={props.icon} />
            </span>
            <span>
                {props.value}
            </span>
        </Button>
    );
}