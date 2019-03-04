import CodeMirror from 'codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import 'codemirror/mode/javascript/javascript'
import Highlighter from 'react-codemirror-runmode'
import React from 'react'
// Basado en https://github.com/craftzdog/react-codemirror-runmode


const Highlight = ({ code, inline }) => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      {code.map(line => {
        return (
          <div>
            <Line row={line} inline={inline}/>
          </div>
        )
      })}
    </div>
  )
}

export default Highlight

const Line = ({ row, inline }) => {
  return (
    <Highlighter
    codeMirror={CodeMirror}
    theme='blackboard'
    inline={inline}
    value={row}
    language='javascript'
    />
  )
}