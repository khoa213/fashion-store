import { styled } from "styled-components";
import searchIcon from "../../images/search-icon.svg";
import person from "../../images/person.svg";
import girl from "../../images/girl.svg";
import { Button } from "../Button";
const topMain = {
    width: "1920px",
    height: "847px",
    backgroundColor: "#F0F0F0"
}
const header = {
    width: "1320px",
    height: "59px",
    marginTop: "31px",
    marginLeft: "300px",
    borderBottom: "3px solid #E3E3E3"
}
const shopName = {
    marginLeft: "536px",
    fontWeight: 400,
    fontSize: "42px",
}

const Account = styled.span`
    margin-left: 340px;
     font-weight: 400;
     font-size: 18px;
     &:hover 
     {color:orange;
        cursor: pointer;
        };
`;

const Shopping = styled.span`
    margin-left: 55px;
     font-weight: 400;
     font-size: 18px;
     &:hover 
     {color: orange;
        cursor: pointer;
     };
`;
const content = {
    width: "1226px",
    height: "562px",
    marginTop: "135px",
    marginLeft: "300px",
}
const introduce = {
    width: "686px",
    height: "364px",
    marginTop: "74px",
    float: "left",
}
const collection = {
    fontWeight: 300,
    fontSize: "74px",
    lineHeight: "55px"
}
const collectionContent = {
    fontWeight: 400,
    fontSize: "30px",
    lineHeight: "55px",
    marginTop: "52px"
}
const productImage = {
    width: "442px",
    height: "562px",
    marginLeft: "98px",
    float:"left"
}


const TopMain = () => {
    return (
        <div style={topMain}>
            <div style={header}>
                <img src={searchIcon} alt=""/>
                <span style={shopName}>Lisa Store</span>
                <Account ><img src={person} width="20px" height="19px" alt=""/>Account </Account>
                <Shopping ><img src={person} width="20px" height="19px" alt=""/>Shopping</Shopping>
            </div>
            <div style={content}>
                <div style={introduce}>
                    <div style={collection}>
                        Collections
                    </div>
                    <div style={collectionContent}>
                        You can explore and shop many different collections from various brands here
                    </div>
                    
                    <Button backgrcolor="#1E2832" text="Shop Now" width="223px" height="72px" margin="66px 0px 0px 0px" 
                    color="white" changeBg="orange"></Button>
                    
                </div>
                <div style={productImage}>
                    <img src={girl} alt="" />
                </div>
            </div>
        </div>
    )
}
export { TopMain };