import styles from './BooksFooter.module.scss'
import ClockClassComponent from '../../util/components/ClockClassComponent';
import ClockFunctionalComponent from '../../util/components/ClockFunctionalComponent';
import Clock from '../../util/components/Clock';
export default function BooksFooter() {
    return (
      <>
      <p className={styles.background}>publicplan</p>
      <ClockFunctionalComponent />
      <ClockClassComponent />
      <Clock />
      </>
    );
  }
