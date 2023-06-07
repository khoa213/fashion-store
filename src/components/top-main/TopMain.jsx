import { styled } from "styled-components";
import searchIcon from "../../images/search-icon.svg";
import person from "../../images/person.svg";
import girl from "../../images/girl.svg";
import { Button } from "../Button";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
const topMain = {
    maxWidth: "1920px",
    height: "847px",
    backgroundColor: "#F0F0F0",
    margin:'0 auto',
}
const header = {
    maxWidth: "1320px",
    height: "59px",
    margin: '0 auto',
    borderBottom: "3px solid #E3E3E3"
}
const shopName = {
    marginLeft: "25%",
    fontWeight: 400,
    fontSize: "42px",
}

const Account = styled.span`
    margin-left: 10%;
     font-weight: 400;
     font-size: 18px;
     &:hover 
     {color:orange;
        cursor: pointer;
        };
`;

const Shopping = styled.span`
    margin-left: 2%;
     font-weight: 400;
     font-size: 18px;
     &:hover 
     {color: orange;
        cursor: pointer;
     };
`;
const content = {
    maxWidth: "1226px",
    height: "562px",
    margin:'0 auto'
}
const introduce = {
    maxWidth: "686px",
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
    maxWidth: "442px",
    height: "562px",
    marginLeft: "98px",
    float:"left"
}


const TopMain = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1224px)' });
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
                {isBigScreen && <div style={productImage}>
                                <img src={girl} alt="" />
                                </div>
                }
                
            </div>
        </div>
    )
}
export { TopMain };