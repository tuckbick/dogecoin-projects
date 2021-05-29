import * as React from "react"
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return <main className="Index">
        <header className="Header">
            <h1>
                <StaticImage className="Logo" alt="Dogecoin Logo" src="../images/dogecoin-300.png" />
                {'Dogecoin Projects'}
            </h1>
            <nav>
                <a href="">{'add your project'}</a>
                <em aria-hidden="true">{'•'}</em>
                <a href="">{'edit this list'}</a>
            </nav>
        </header>
        <table className="Table">
            <colgroup>
                <col className="Table__number" />
                <col className="Table__name" />
                <col className="Table__description" />
                <col className="Table__resources" />
            </colgroup>
            <thead>
                <tr>
                    <th>{'#'}</th>
                    <th>{'Name'}</th>
                    <th>{'Description'}</th>
                    <th>{'Resources'}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{'0'}</td>
                    <td>My Project</td>
                    <td>To do the things.</td>
                    <td>
                        <a href="http://dogecoin.com">Dogecoin.com</a>
                    </td>
                </tr>
                <tr>
                    <td>{'1'}</td>
                    <td>My Project</td>
                    <td>To do the things.</td>
                    <td>
                        <a href="http://dogecoin.com">Dogecoin.com</a>
                    </td>
                </tr>
                <tr>
                    <td>{'2'}</td>
                    <td>My Project</td>
                    <td>To do the things.</td>
                    <td>
                        <a href="http://dogecoin.com">Dogecoin.com</a>
                    </td>
                </tr>
                <tr>
                    <td>{'3'}</td>
                    <td>My Project</td>
                    <td>To do the things.</td>
                    <td>
                        <a href="http://dogecoin.com">Dogecoin.com</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>;
}

export default IndexPage;