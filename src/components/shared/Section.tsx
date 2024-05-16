import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

// Section에서 따로 Classname을 받아 스코프를 관리하기위해 className을 따로 받는다
function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}) {
  return (
    <section className={cx(['container', className])}>
      {title !== null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section
