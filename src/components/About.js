import React, { useState } from 'react'

export default function About(props) {

    document.title = 'TextUtils-About'

    const [style, setstyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
    })

    const [BtnText, setBtnText] = useState('Enable Dark Mode')

    const toggleStyle = () => {
        if (style.color === 'black') {
            setstyle({
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '10px',
            })

            setBtnText('Disable Dark Mode');
        } else {
            setstyle({
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '10px',
            })
            
            setBtnText('Enable Dark Mode');
        }
    }


    // let underStyle = {
    //     color: 'white',
    //     backgroundColor: 'grey',
    // }

    return (
        <div id="about-us" className="container" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white', borderRadius: '10px'}}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white'}} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via style transitions. You can modify any of this with custom style or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white'}} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via style transitions. You can modify any of this with custom style or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white'}} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via style transitions. You can modify any of this with custom style or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{BtnText}</button>
            </div> */}
            <br />
        </div>
    )
}
