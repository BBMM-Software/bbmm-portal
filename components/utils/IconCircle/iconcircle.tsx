
import {IconType} from "react-icons";
import styles from './iconcircle.module.css'
interface IconCircleProps {
    Icon: IconType;
}
export default function IconCircle( {Icon} : IconCircleProps){
    return(
        <div className={styles.iconCircle}>
            <Icon />
        </div>
    );
}