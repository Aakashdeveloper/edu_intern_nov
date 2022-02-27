import React from 'react';
import {Link} from 'react-router-dom';

function Post(props){
    
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Post Page</h2>
            </div>
            <div className="panel-body">
                <p>
                    Post छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.
                </p>
                <h2>JavaScript</h2>
                <Link to={`/post/JavaScript?page=1`} className="btn btn-success">Details</Link>
                <h2>React</h2>
                <Link to={`/post/React?page=2`} className="btn btn-warning">Details</Link>
                <h2>Node</h2>
                <Link to={`/post/Node?page=3`} className="btn btn-info">Details</Link>
            </div>
        </div>
    )
}

export default Post