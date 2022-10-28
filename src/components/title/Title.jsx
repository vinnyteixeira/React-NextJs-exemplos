import styles from './Title.module.css'

/*
Exemplo de componente react com children(filhos);
*/

function Title (props) {
    return (
        <h1 className={styles.title}>
            {props.children}
        </h1>
    )
}

export default Title