const InfoBar = ({text, flexNumber, textAlign, progressBarPercentage}) => {
    return (
        <div className="info-bar" style={{display: 'flex', alignItems: 'center', flex: flexNumber || 1, textAlign: textAlign || 'center'}}>
            <p style={{flex: 1}}>{text}</p>
            {progressBarPercentage && (<div className="progressBar" style={{flex: 3}}>
                    <div className="progressBarPercentage" style={{width: `${progressBarPercentage}%`}}/>
                </div>)}
        </div>
    )
}

export default InfoBar