import classNames from 'classnames/bind'
import styles from './Contact.module.scss'

import Section from '@shared/Section'

import React from 'react'
import Accordion from '@shared/Accordion'
import { Person, Wedding } from '@/models/wedding'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

const Contact = ({
  groom,
  bride,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
}) => {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">
        <ContactInfo
          name={groom.name}
          account={groom.account}
          phoneNumber={groom.phoneNumber}
        />
        <ContactInfo
          name={groom.parents[0].name}
          account={groom.parents[0].account}
          phoneNumber={groom.parents[0].phoneNumber}
        />
        <ContactInfo
          name={groom.parents[1].name}
          account={groom.parents[1].account}
          phoneNumber={groom.parents[1].phoneNumber}
        />
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo
          name={bride.name}
          account={bride.account}
          phoneNumber={bride.phoneNumber}
        />
        <ContactInfo
          name={bride.parents[0].name}
          account={bride.parents[0].account}
          phoneNumber={bride.parents[0].phoneNumber}
        />
        <ContactInfo
          name={bride.parents[1].name}
          account={bride.parents[1].account}
          phoneNumber={bride.parents[1].phoneNumber}
        />
      </Accordion>
    </Section>
  )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  // 모바일인지 웹인지 구분해서 팝업창 띄워주는 함수

  return (
    <div className={cx('wrap-contact')}>
      <div className={cx('wrap-contact-info')}>
        {/* 정보 표현 */}
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>
      <ul className={cx('wrap-buttons')}>
        {/* 버튼들 */}
        <li>
          <a href={`$tell:${phoneNumber}`} className={cx('button')}>
            전화
          </a>
          {/* <div
            className={cx('button')}
            onClick={() => (document.location.href = 'tel:전화번호')}
          >
            전화
          </div> */}
        </li>
        <li>
          <CopyToClipboard
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사가 완료되었습니다.')
            }}
          >
            <button className={cx('button')}>복사</button>
          </CopyToClipboard>
        </li>
        {account.kakaopayLink !== null ? (
          <li>
            <a
              href={account.kakaopayLink}
              target="_blank"
              rel="noreferrer"
              className={cx('button')}
            >
              송금
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Contact
