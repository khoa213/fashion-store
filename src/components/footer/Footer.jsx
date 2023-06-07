import instagramImage from '../../images/image-product-12.svg';
const instagram = {
    width: '1920px',
    height: '653px',
    backgroundColor: '#F0F0F0',
    marginTop: '100px'
}
const text = {
    fontWeight:500,
    fontSize:'50px',
    textAlign: 'center',
    paddingTop:'50px',
}
const image = {
    display:'flex',
    justifyContent: 'space-around',
    marginTop: '50px',
}
const instaName = {
    fontWeight:500,
    fontSize:'28px',
    color:'#FF6F61',
    textAlign: 'center',
    marginTop: '70px',
}
const footer1 = {
    width: '1912px',
    height: '355px',
}
const topFooter = {
    width: '1320px',
    height: '213px',
    marginLeft: '296px',
}
const left = {
    width: '392px',
    height: '207px',
    fontWeight:400,
    fontSize:'28px',
    float:'left',
}
const right = {
    float:'right',
    marginTop: '-150px',
}
const tH = {
    padding: '0px 100px '
}
const bottomFooter = {
    width: '1912px',
    height: '52px',
    backgroundColor:'#1E2832',
    color:'white',
}
const shopName = {
    marginLeft: '300px',
    paddingTop: '15px',
}
const scrollButton = {
    float: 'right',
    marginRight:'339px',
    marginTop: '-20px',
}
const Footer = () => {
    return (
        <div>
        <div style={instagram}>
            <div style={text}>
                Follow products and discounts on instagram
            </div>
            <div style={image}>
                <div>
                <img src={instagramImage} alt="" />
                </div>
                <div>
                <img src={instagramImage} alt="" />
                </div>
                <div>
                <img src={instagramImage} alt="" />
                </div>
                <div>
                <img src={instagramImage} alt="" />
                </div>
            </div>
            <div style={instaName}>
                @Lisa.Official
            </div>
        </div>
        <div style={{footer1}}>
            <div style={topFooter}>
                <div style={left}>
                    <p>Lisa</p>
                    <p>abcxyz</p>
                </div>
                <div style={right}>
                    <table>
                        <tr>
                            <th style={tH}>CATALOG</th>
                            <th style={tH}>ABOUT US</th>
                            <th style={tH}>CUSTOMER SERVICES</th>
                        </tr>
                        <tr>
                            <td style={tH}>Necklaces</td>
                            <td style={tH}>Our Producers</td>
                            <td style={tH}>Contact us</td>
                        </tr>
                        <tr>
                            <td style={tH}>Necklaces</td>
                            <td style={tH}>Our Producers</td>
                            <td style={tH}>Contact us</td>
                        </tr>
                    </table>
                </div>

            </div>
            <div style={bottomFooter}>
                <div style={shopName}>2023 LISA, Inc.</div>
                <div style={scrollButton}>Scroll to Top</div>
            </div>

        </div>
        </div>
    )
}
export { Footer };