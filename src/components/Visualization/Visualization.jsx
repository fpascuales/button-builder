import { useContext } from 'react'
import { MyContext } from '../../shared/Context/Context'

const Visualization = () => {
  const { state } = useContext(MyContext);

  const buttonStyle = {
    width: `${state.width}px`,
    height: `${state.height}px`,
    marginTop: `${state.marginTop}px`,
    marginRight: `${state.marginRight}px`,
    marginBottom: `${state.marginBottom}px`,
    marginLeft: `${state.marginLeft}px`,
    paddingTop: `${state.paddingTop}px`,
    paddingRight: `${state.paddingRight}px`,
    paddingBottom: `${state.paddingBottom}px`,
    paddingLeft: `${state.paddingLeft}px`,
    fontSize: `${state.fontSize}px`,
    fontWeight: state.fontWeight,
    textAlign: state.textAlign,
    textDecoration: state.textDecoration,
    textTransform: state.textTransform,
    backgroundColor: state.backgroundColor
  }

  return (
    <div>
      <button
        style={buttonStyle}
      >
      Texto Botón
      </button>
    </div>
  )
}

export default Visualization