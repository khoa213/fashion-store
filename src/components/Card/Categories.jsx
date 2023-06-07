import { styled } from "styled-components";
const StyledCategory = styled.div `
    background-color : blue ;
    color: white;
    position: absolute;
    bottom: 30px;
    display: none;
    width: 100%;
`;
const Categories =({type,quantity}) => {
    return (
        <StyledCategory className="info">
            <div style={{float:"left"}}>{type}</div>
            <div style={{float:"right"}}>{quantity}</div>
        </StyledCategory>
    )
}
export { Categories } ;