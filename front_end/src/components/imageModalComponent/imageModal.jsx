import {Container, Image} from '../../style/styles'

const ImageModal = ({children}) =>{
  return (
    <Container
    >
      <Image>

        {children}
      </Image>
    </Container>
  )
}

export default ImageModal