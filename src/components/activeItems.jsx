const ActiveItems = ({text, flexNumber, textAlign, progressBarPercentage}) => {
    return (
        <div className="active-item-bar" style={{display: 'flex', alignItems: 'center', flex: flexNumber || 1, textAlign: textAlign || 'center'}}>
            <p>{text}</p>
        </div>
    )
}

export default ActiveItems