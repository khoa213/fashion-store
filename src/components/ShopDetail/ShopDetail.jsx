import brandImage from "../../images/brand-1.svg";
import manto from "../../images/manto.svg";
import { CategoryCard } from "../Card";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
const brand = {
    maxWidth: '1320px',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
}
const categoryText = {
    width: '648px',
    height: '52px',
    fontWeight: 400,
    fontSize: '34px',
    textAlign: 'center',
    transform: 'rotate(-90deg)',
    marginTop: '300px',
    marginLeft: '-300px',
    float: 'left',
}
const categoryItem = {
    float:"left",
    
}
const categoryItem1 = { 
    display:"flex",
    flexWrap: "wrap",
    justifyContent:"space-between",
    margin:"20px 30px 40px 20px",
}
const detail = {
    maxWidth: '1320px',
    margin: '0 auto',
}

const ShopDetail = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1224px)' });
    return (
        
        <div>
            <div style={brand}>
                <div><img src={brandImage} alt=""/></div>
                <div><img src={brandImage} alt=""/></div>
                <div><img src={brandImage} alt=""/></div>
                <div><img src={brandImage} alt=""/></div>
                <div><img src={brandImage} alt=""/></div>
            </div>
            <div style={detail}>
            <div style={{float:"left"}} >
                <div style={categoryText}>
                    EXPLORE NEW AND POPULAR STYLES
                </div>
                <div style={{float:"left",marginLeft:'-300px'}}>
                    <CategoryCard imgsrc={manto} type="Manto" quantity="86 products" width="648px" height="648px"></CategoryCard>
                </div>
            </div>
            {isBigScreen && <div style={categoryItem}>
                <div style={categoryItem1}>
            <CategoryCard imgsrc={manto} type="Manto" quantity="86 products" width="250px" height="250px"></CategoryCard>
            <CategoryCard imgsrc={manto} type="Manto" quantity="86 products" width="250px" height="250px"></CategoryCard>
            </div>
            <div style={categoryItem1}>
            <CategoryCard imgsrc={manto} type="Manto" quantity="86 products" width="250px" height="250px"></CategoryCard>
            <CategoryCard imgsrc={manto} type="Manto" quantity="86 products" width="250px" height="250px"></CategoryCard>
            </div>
            </div>
            }
            
            </div>
        </div>
        
        
    )
};
export {ShopDetail};