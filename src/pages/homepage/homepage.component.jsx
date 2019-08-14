import React from 'react'
import './homepage.styles.scss'

import Directory from '../../components/directory/directory.component'
// I used a Functional component because
// we dont need any lifecycle methods
// nor do we need to store state.
const Homepage = () => (
    <div className="homepage">
       <Directory/>
    </div>
);

export default Homepage;