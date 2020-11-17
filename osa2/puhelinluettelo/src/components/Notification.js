import React from 'react';

const Notification = ({message}) => {
    if (message != null) {
      return (
        <div className={`notification ${message.extraClasses}`}>
          {message.text}
        </div>
      )
    } else {
      return (
        <>
        </>
      );
    }
  };

export default Notification;