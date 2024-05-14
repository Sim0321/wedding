import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

function Heading() {
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>24.05.14</div>
      <div className={cx('txt-day')}>TUESDAY</div>
    </Section>
  )
}

export default Heading
