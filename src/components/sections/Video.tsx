import classNames from 'classnames/bind'
import styles from './Video.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

{
  /* 만약 autoPlay를 하고 싶으면 두가지 방법이 있다 
1. source 태그를 빼고 video 태그에 직접적으로 src를 넣으면 된다. (chorme에서는 정책 때문에 muted가 있어야함 )
2. source 태그를 사용한다면 video 태그에 muted 있어야한다.
*/
}
function Video() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.jpg"
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
