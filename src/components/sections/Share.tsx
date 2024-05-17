import { parseISO, format, getDay } from 'date-fns'
import { ko } from 'date-fns/locale'

import classNames from 'classnames/bind'
import styles from './Share.module.scss'

import Section from '@shared/Section'

import React, { useEffect } from 'react'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

const Share = ({ groomName, brideName, date }: ShareProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      console.log(window)

      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} ❤️ ${brideName} 결혼합니다.`,
        description: `${(format(parseISO(date), 'M월 d일 eeee aaa h시'), { locale: ko })}`,
        imageUrl:
          'https://img.freepik.com/premium-vector/cute-asian-groom-and-bride-characters-flat-design-style-vector-illustration_540284-382.jpg',
        link: {
          mobileWebUrl: window.location.origin, // http://localhost:3000/
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin, // http://localhost:3000/
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <Section title="공유하기">
      <div>
        <button onClick={handleShareKakao}>카카오톡</button>
        <button>링크</button>
      </div>
    </Section>
  )
}

export default Share
