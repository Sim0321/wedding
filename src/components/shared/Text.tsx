import React from 'react'
// interface : <Text>{'안녕하세요\n'}</Text>

function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment key={idx}>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}

export default Text
