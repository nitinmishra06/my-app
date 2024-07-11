import React from 'react'

export default function Alert(props) {
    const convt = (msg) => {
        var txt = msg.toLowerCase();
        return txt.charAt(0).toUpperCase() + txt.slice(1);
      }
 return (
  <div style={{height:'50px'}} >
    {props.alert&& <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{convt(props.alert.type)}</strong>:{props.alert.message}
</div>}
</div>
  )
}
