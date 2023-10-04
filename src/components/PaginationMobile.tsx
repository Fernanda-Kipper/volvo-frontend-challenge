import styles from '../../public/css/components/paginationMobile.module.css'

interface PaginationMobileProps {
    total: number,
    onClick: (i: number) => void
    selected: number;
}

export default function PaginationMobile({ total, onClick, selected } : PaginationMobileProps){
    return(
        <div className={styles.btnWrapper}>
            {Array
                .from({ length: total })
                .map((element,i) => 
                <button
                    className={i === selected ? styles.btnSelected : styles.btn}
                    key={i}
                    onClick={() => onClick(i)}>
                </button>
            )}
        </div>
    )
}