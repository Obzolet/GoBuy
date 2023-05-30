import React from 'react';

const Message = ({mssgStyle,showMssg,clearMssg,optionShowMssg}) => {
    return (
        <span className={"message " + mssgStyle}>
            <p>{showMssg}</p>
            {optionShowMssg && <button onClick={clearMssg}>Aceptar</button>}
        </span>
    );
}

export default Message;
