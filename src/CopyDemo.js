import React, { Component } from 'react'


class CopyDemo extends Component{
    handleCopy = () => {
        alert("STOP STEALING FROM ME!")
    }
    render(){
        return(
            <div>
                <h3>Try Copying Some of this Text</h3>
                <section style={{width: "300px", display: "inline-block"}} onCopy={this.handleCopy}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec eleifend odio. Suspendisse volutpat risus dolor, non eleifend orci varius hendrerit. 
                Curabitur ut sem pretium, rhoncus tellus in, euismod augue. Suspendisse potenti. Morbi lacinia tortor et arcu ullamcorper pulvinar. 
                Nam rhoncus ultrices purus. Donec id volutpat ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                Proin ac erat accumsan, imperdiet ante vel, elementum erat. Aliquam venenatis ipsum vitae nunc pellentesque eleifend. Nam egestas ultrices odio, sit amet imperdiet magna mollis sit amet.
                Aenean et suscipit mi, non rhoncus lorem. Vestibulum gravida velit vel pellentesque suscipit. Proin molestie nisl risus, vel maximus nunc venenatis vitae. Nunc eget odio dui. 
                Phasellus commodo volutpat suscipit.
                </section>
            </div>
        )
    }
}
export default CopyDemo