import styled from "styled-components";

export const Container =
  styled.div
  `
    display: ${({ display }) => (display ? display : "flex")};
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "column"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "#FFFFFF"};
    
    width: ${({ width }) => (width ? width : "608px")};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
    height: ${({ height }) => (height ? height : "390px")};
    margin: ${({ margin }) => (margin ? margin : "auto")};
    padding: ${({ padding }) => (padding ? padding : "auto")};
    box-sizing: border-box;
    
    box-shadow: ${({ boxShadow }) =>
      boxShadow ? boxShadow : "0px 0px 0px rgba(0, 0, 0, 0.25)"}; 
    
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "4px"};
    border-style: ${({ borderStyle }) => (borderStyle ? borderStyle : "solid")};
    border-color: ${({ borderColor }) =>
      borderColor ? borderColor : "#D1DCE3"};
    border-width: ${({ borderWidth }) => (borderWidth ? borderWidth : "1px")};

    text-align:  ${({ textAlign }) => (textAlign ? textAlign : "center")};
    font-size: ${({ fontSize }) =>
      fontSize ? fontSize : "calc(10px + 2vmin)"};
    color: ${({ color }) => (color ? color : "#656565")};
`;
export const Flex = styled.div`

    display: ${({ display }) => (display ? display : "flex")};
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "column"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    margin: ${({ margin }) =>
      margin ? margin : "0px"};
    padding: ${({ padding }) =>
      padding ? padding : "0px"};  
    gap:${({ gap }) =>
    gap ? gap : "0px"};
    @media(min-width: 768px){
        flex-direction: row;
    }
`;

export const Image = styled.img`
  width: ${({ width }) => (width ? width : "90%")};
  height: ${({ height }) => (height ? height : "90%")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
`;

export const Button = styled.button`
  cursor:${({cursor}) => (cursor ? cursor : 'pointer')}; 
  box-sizing: ${({ boxSizing }) => (boxSizing ? boxSizing : "border-box")};
  display: ${({ display }) => (display ? display : "flex")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "center")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  padding: ${({ padding }) => (padding ? padding : "12px 20px")};
  margin: ${({ margin }) => (margin ? margin : "0px 0px 0px 0px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px 0px 0px 0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0px 0px 0px 0px")};
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "40px")};
  background: ${({background}) => (background ? background : "none")};
  background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Inter')};
  color: ${({ color }) => (color ? color : "#FFFFFF")};
`;

export const Title = styled.label`
  padding: ${({ padding }) => (padding ? padding : "12px 20px")};
  margin: ${({ margin }) => (margin ? margin : "0px 0px 0px 0px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px 0px 0px 0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0px 0px 0px 0px")};
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "40px")};
  background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Inter')};
  color: ${({ color }) => (color ? color : "#FFFFFF")};
`
export const Input = styled.input`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  width: ${({ width }) => (width ? width : "90%")};
  height: ${({ height }) => (height ? height : "35px")};
  margin: ${({ margin }) => (margin ? margin : "0px 0px 0px 0px")};
  padding: ${({ padding }) => (padding ? padding : "12px 20px")};
  border-radius: 5px;
  border: ${({ border }) => (border ? border : "solid")};
  border-color: #dde6e9;
  border-width: 1px;
  &:focus {
    outline: none;
    border-color: #66afe9;
  }
`;

export const OverflowY = styled.div`
  margin: 0px;
  padding: 0px;
  overflow-y: scroll;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  width: 100%;
  font: SourceSansPro;
  font-size: 14px;
  text-align: left;
  color: #212529;
  
`;
export const TextArea = styled.textarea`
border: 1.5px solid #E9ECEF;
border-radius: 4px;
font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
width: ${({ width }) => (width ? width : "90%")};
height: ${({ height }) => (height ? height : "80px")};
margin: ${({ margin }) => (margin ? margin : "0px 0px 0px 0px")};
padding: ${({ padding }) => (padding ? padding : "12px 20px")};
border-color: #dde6e9;
border-width: 1px;
&:focus {
  outline: none;
}
`
export const HelperText = styled.label`
  margin-bottom: 8px;
  width: 100%;
  font: SourceSansPro;
  font-size: 11px;
  font-weight: bold;
  color: #cecece;
  text-align: left;
`;
export const TitleH5 = styled.h5`
  margin-bottom: 22px;
  margin-left: 40px;
  width: 118%;
  font: SourceSansPro;
  text-align: left;
`;
export const ResultP =
  styled.p
  `
    margin: 22px 0px 5px 4px;

    font: SourceSansPro;
    font-size: 16px;
    font-style: italic;
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
    color: #5D9CEC;

    text-align: left;
`;

export const divContainer = styled.div`
width:100%;
display: flex;
align-items: center;
`

