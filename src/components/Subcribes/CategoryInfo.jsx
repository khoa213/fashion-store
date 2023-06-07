const formatText = {
    fontWeight:600,
    fontSize:"16px"
}
const CategoryInfo = ({text,type,price}) => {
    return (
        <div>
            <div style={formatText}>
                {text}
            </div>
            <div style={{width:"312px"}}>
                <div style={{float:"left"}}>{type}</div>
                <div style={{float:"right"}}>{price}</div>
            </div>
        </div>
    )
};
export { CategoryInfo};