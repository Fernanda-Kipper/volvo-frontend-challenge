import { IconButton } from "vcc-ui";

import styles from '../../public/css/components/paginationDesktop.module.css'

interface PaginationDesktopProps {
    onClickLeft: () => void;
    onClickRight: () => void;
}

export default function PaginationDesktop({ onClickLeft, onClickRight }: PaginationDesktopProps){
    return(
        <div className={styles.btnWrapper}>
            <IconButton variant="outline" onClick={onClickLeft} aria-label="esquerda" iconName="navigation-chevronback"/>
            <IconButton variant="outline" onClick={onClickRight} aria-label="direita" iconName="navigation-chevronforward"/>
        </div>
    )
}