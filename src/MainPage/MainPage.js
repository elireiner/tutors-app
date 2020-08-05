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
        let tutors = tutorsObject.map(tutor => {
            return <Tutor
                key={tutor.id}
                name={tutor.name}
                price={tutor.price}
                subject={tutor.subject}
            />
        })

        return (
            <>
                <nav className="navbar">
                    {<Nav />}
                </nav>
                <div>
                    <section className="filter-section">
                        {<Filters />}
                    </section>

                    <section>
                        <ul className="tutors-list">
                            {tutors}
                        </ul>
                    </section>
                </div>


            </>
        )
    }
}