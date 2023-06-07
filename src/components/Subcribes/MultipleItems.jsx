import React, { Component } from "react";
import Slider from "react-slick";
import { CategoryCard } from "../Card";
import { CategoryInfo } from "./CategoryInfo";
import manto from "../../images/manto.svg";

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
      return (
        <div>
          <Slider {...settings}>
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
            
          </Slider>
        </div>
      );
    }
  }