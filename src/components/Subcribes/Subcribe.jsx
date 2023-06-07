import { Button } from "../Button";
import manto from "../../images/manto.svg";
import zara from "../../images/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.svg";
import zaraLogo from "../../images/1024px-Zara_Logo 2.svg";
import { CategoryCard } from "../Card";
import { CategoryInfo } from "./CategoryInfo";
import MultipleItems from "./MultipleItems";

const subText = {
    clear:"both",
    fontWeight:500,
    fontSize:"50px",
    textAlign:"center",
    marginTop:"10px"
}
const subNav = {
    maxWidth:"1320px",
    height:"32px",
    margin:'0 auto',
}
const navButton = {
    width:"373px",
    height:"22px",
    display:"flex",
    justifyContent:"space-between",
    float: "left",
}
const showProduct = {
    maxWidth:'1320px',
    display:"flex",
    flexWrap: "wrap",
    justifyContent:"space-between",
    margin:'0px auto',
}
const banner = {
    maxWidth:"1320px",
    height:"776px",
    position: "relative",
    margin:"0 auto",
}
const logo = {
    position: "absolute",
    left: "970px",
    top: "200px"
}
const bannerText = {
    fontSize:"26px",
    fontWeight:400,
    color:"#FF6F61",
    width:"504px",
    height:"187px",
    position:"absolute",
    left:"970px",
    top:"300px"
}
const bannerButton = {
    position:"absolute",
    left:"970px",
    top:"450px"
}
const Subcribe = () => {
    return (
        <div>
        <div style={subText}>
            Or subcribe to the newsletter
        </div>
        <div style={subNav}>
            <div style={navButton}>
                <div>All products</div>
                <div>All products</div>
                <div>All products</div>
                <div>All products</div>
            </div>
            <div style={{float:"right"}}>
                <Button width="92px" height="32px" backgrcolor="#1E2832" color="white" text="Filter" changeBg="orange"></Button>
            </div>
        </div>
        <div style={showProduct}>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            
        </div>
        <div style={banner}>
            <img src={zara} alt="" />
            <div style={logo}>
                <img src={zaraLogo} alt="" />    
            </div> 
            <div style={bannerText}>
                Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani Boutique in Los Angeles
            </div>
            <div style={bannerButton}>
                <Button width="237px" height="72px" backgrcolor="white" color="black" changeBg="orange" text="See collection"></Button>
            </div>
        </div>
        <div style={subText}>
            Best Seller
        </div>
        <div style={subNav}>
            <div style={navButton}>
                <div>All products</div>
                <div>All products</div>
                <div>All products</div>
                <div>All products</div>
            </div>
            <div style={{float:"right"}}>
                <Button width="92px" height="32px" backgrcolor="#1E2832" color="white" text="Show all" changeBg="orange"></Button>
            </div>
        </div>
        <div style={showProduct}>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            <div>
                <CategoryCard imgsrc={manto} type="Dress" quantity="Shop now" width="312px" height="400px"></CategoryCard>
                <CategoryInfo text="Classic manto" type="Dress" price="$63.85"></CategoryInfo>
            </div>
            
            
        </div>

        </div>
    )
}
export {Subcribe};