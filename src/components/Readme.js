import { Helmet } from 'react-helmet'

export default function Readme() {
    return (
        <div id="content" className="p-4 p-md-5 pt-5">
            <Helmet>
                <title>Readme</title>
            </Helmet>
            <h2 className="mb-4">Readme</h2>
            <p>
                <code>npx create-react-app practce-react</code><br/>
                <code>npm install react-router-dom</code><br/>
                <code>npm install react-helmet</code><br />
                <code>npm install @mui/icons-material</code><br />
                <code>npm install @mui/material @emotion/react @emotion/styled</code><br />
                <code>npm install @mui/material @mui/styled-engine-sc styled-components</code><br />
                <code>@mui/lab</code><br />
            </p>
        </div>
    )
}
