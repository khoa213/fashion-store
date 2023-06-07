import { styled } from "styled-components";
import { Categories } from ".";
const StyledCard = styled.div`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    &:hover {
        .info{display: block;}
        }
`;


const CategoryCard = ({imgsrc,type,quantity,width,height}) => {
    return (
        <StyledCard
        width={width}
        height={height}>
            <img src={imgsrc} alt="" width="100%" height="100%"/>
            <Categories type={type} quantity={quantity}></Categories>
        </StyledCard>
    );
}
export { CategoryCard};