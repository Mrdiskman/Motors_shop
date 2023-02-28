import styled from "styled-components";

import Image from 'next/image'


interface Props {
    
    width?: string
    display?: string
    flexDirection?: string
    alignItems?: string
    justifyContent?: string
    backgroundColor?: string
    maxWidth?: string
    height?: string
    margin?: string
    padding?: string
    boxSizing?: string
    boxShadow?: string
    borderRadius?: string
    borderStyle?: string
    borderColor?: string
    borderWidth?: string
    textAlign?: string
    fontSize?: string
    color?: string
    fontWeight?: string
    cursor?: string
    marginTop?: string
    marginBottom?: string
    background?: string
    border?: string
    fontFamily?: string
    gap?: string
    objectFit?: string
}

export const Container =
  styled.div<Props>
  `
    display: ${({ display }) => (display ? display : "flex")};
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "column"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "#FDFDFD"};
    
    width: ${({ width }) => (width ? width : "auto")};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
    height: ${({ height }) => (height ? height : "auto")};
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
export const Flex = styled.div<Props>`

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

export const ImageFit = styled(Image)<Props>`
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : "cover")};    
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "4px")};
`;

export const Button = styled.button<Props>`
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

export const Title = styled.h2<Props>`
  padding: ${({ padding }) => (padding ? padding : "0px 0px")};
  margin: ${({ margin }) => (margin ? margin : "0px 0px 0px 0px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px 0px 0px 0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0px 0px 0px 0px")};
  background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : "none")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "500")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Inter')};
  color: ${({ color }) => (color ? color : "#000000")};
`
export const Form = styled.form<Props>`
  padding: ${({ padding }) => (padding ? padding : "0px 0px")};
  margin: ${({ margin }) => (margin ? margin : "0px 0px 0px 0px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "8px")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "17px")};
  background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`
export const Label = styled.label<Props>`
  padding: ${({ padding }) => (padding ? padding : "0px 0px")};
  margin: ${({ margin }) => (margin ? margin : "0px 0px 0px 0px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "8px")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "17px")};
  background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "medium")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Inter')};
  color: ${({ color }) => (color ? color : "#212529")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`


export const Input = styled.input<Props>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "48px")};
  margin: ${({ margin }) => (margin ? margin : "0px 0px 24px 0px")};
  padding: ${({ padding }) => (padding ? padding : "12px 20px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  border: ${({ border }) => (border ? border : "solid")};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : " #E9ECEF")};
  border-width: 1,5px;
  ::placeholder {
    color: #868E96;
    opacity: 1;
  }
  &:focus {
    outline: none;
    border-color: #66afe9;
  }
`;

export const OverflowY = styled.div<Props>`
  margin: 0px;
  padding: 0px;
  overflow-y: scroll;
`;


export const TextArea = styled.textarea<Props>`
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
export const HelperText = styled.label<Props>`
  margin-bottom: 8px;
  width: 100%;
  font: SourceSansPro;
  font-size: 11px;
  font-weight: bold;
  color: #cecece;
  text-align: left;
`;
export const TitleH5 = styled.h5<Props>`
  margin-bottom: 22px;
  margin-left: 40px;
  width: 118%;
  font: SourceSansPro;
  text-align: left;
`;
export const ResultP =
  styled.p<Props>
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
