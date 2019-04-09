import React from 'react'
import { Button } from '../style/ArticleStyle';
import '../style/ToolTip.css';

const PlagiarismView = ({checkPlagiarism, loading, text, plagiarismStatus, plagiarism}) => {
  return (
    <div className="tooltip">
    <Button
        onClick={()=>checkPlagiarism()}
        disabled={loading || text === ''}
    >
        Comprobar Plagio
    </Button>

    {plagiarismStatus && <p>{plagiarismStatus}</p>}

    {loading && <p>Esto podría demorar unos minutos, por favor espere..</p>}

    {plagiarism!==[] && <p hidden>Hay otros sitios o documentos ocupando ese texto</p>}
    <span className="tooltiptext">
        Verificar si el texto es plagiado
    </span>
</div>
  )
}

export default PlagiarismView
