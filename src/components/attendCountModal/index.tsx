import { Wedding } from '@/models/wedding'
import { useModalContext } from '@contexts/ModalContext'
import { useEffect, useRef } from 'react'

function AttendCountModal({ wedding }: { wedding: Wedding }) {
  const { open, close } = useModalContext()

  const inputRef = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@have-seen-modal')

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return
    }

    open({
      title: `현재 참석자 : ${wedding.attendCount} 명`,
      body: (
        <div>
          <input
            ref={inputRef}
            type="number"
            placeholder="참석 가능 인원을 추가해주세요."
            style={{ width: '100%' }}
          />
        </div>
      ),
      onLeftButtonClick: () => {
        // 로컬스토리지 저장
        localStorage.setItem('@have-seen-modal', 'true')
        // 모달 닫기
        close()
      },
      onRightButtonClick: async () => {
        if (inputRef.current == null) {
          return
        }

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number(inputRef.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
    })
  }, []) //eslint-disable-line

  return null
}

export default AttendCountModal
