import React from 'react'
import { Link } from 'react-router-dom'
import Tutor from '../Tutor/Tutor'
import Filters from '../Filters/Filters'
import Nav from '../Nav/Nav'
import './MainPage.css'

let tutorsObject = [
    { id: 1, name: "joe", price: "$49.99", subject: "math" },
    { id: 2, name: "joe", price: "25.99", subject: "math" }
]

export default class MainPage extends React.Component {

    render() {
        let tutor = tutorsObject.map(tutor => {
            return <Tutor
                key={tutor.id}
                name={tutor.name}
                price={tutor.price}
                subject={tutor.subject}
            />
        })

        return (
            <>
                <nav>
                    {<Nav />}
                </nav>

                <section className="login-link">
                    <Link to='/students/login'>Sign In</Link>
                </section>
                <div>
                    <section className="tutor-table">
                        {<Filters />}
                    </section>

                    <section>
                        <ul>
                            {tutor}
                        </ul>
                    </section>
                </div>


            </>
        )
    }
}