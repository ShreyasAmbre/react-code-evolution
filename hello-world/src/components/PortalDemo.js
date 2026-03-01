import React from 'react';
import ReactDOM from 'react-dom'

export default function PortalDemo() {
  return ReactDOM.createPortal (
    <div>
      Portal Demo
    </div>,
    document.getElementById('portal-root')
  )
}
