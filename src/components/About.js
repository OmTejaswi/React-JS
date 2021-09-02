import React, {/* useState */} from 'react'

export default function About(props) {

    document.title = 'TextUtils-About'

    // const [style, setstyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     borderRadius: '10px',
    // })

    // const [BtnText, setBtnText] = useState('Enable Dark Mode')

    // const toggleStyle = () => {
    //     if (style.color === 'black') {
    //         setstyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             borderRadius: '10px',
    //         })

    //         // setBtnText('Disable Dark Mode');
    //     } else {
    //         setstyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             borderRadius: '10px',
    //         })

    //         // setBtnText('Enable Dark Mode');
    //     }
    // }


    // let underStyle = {
    //     color: 'white',
    //     backgroundColor: 'grey',
    // }

    return (
        <div id="about-us" className="container" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white', borderRadius: '10px' }}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or anything
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
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
