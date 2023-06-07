import { styled } from "styled-components";

const StyledButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.background } ;
    color: ${props => props.color} ;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    &:hover{
        background-color: ${props => props.changeBg};
        cursor: pointer;
    }
`;
const Button = ({width,height,backgrcolor,color,margin,padding,text,changeBg}) => {
    return (
        <StyledButton
        width={width}
        height={height}
        background={backgrcolor}
        color={color}
        margin={margin}
        padding={padding}
        changeBg={changeBg}>
            {text}
        </StyledButton>
    )
}
export { Button};