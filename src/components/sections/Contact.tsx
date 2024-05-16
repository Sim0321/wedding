import classNames from 'classnames/bind'
import styles from './Contact.module.scss'

import Section from '@shared/Section'

import React from 'react'
import Accordion from '@shared/Accordion'

const cx = classNames.bind(styles)

const Contact = () => {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">sdfsdfsd</Accordion>
      <Accordion label="신부측"> 신부측 신부측 신부측</Accordion>
    </Section>
  )
}

export default Contact
