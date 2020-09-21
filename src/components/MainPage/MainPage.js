import React from 'react';
import TutorLink from '../TutorLink/TutorLink';
import Filters from '../Filters/Filters';
import Nav from '../Nav/Nav';
import './MainPage.css';

export default class MainPage extends React.Component {
    static defaultProps = {
        currentTutors: []
    };
    
    handleSelectChange = (e) => {
        this.props.setFilters(e)
    };

    handleSearch = (text) => {
       this.props.onFilterTextChange(text);
    };

    render() {
      
        return (
            <>
                <Nav />
                <div>

                    <section className="filter-section">
                        <Filters
                            handleSearch={this.handleSearch}
                            searchText={this.props.searchText}
                            handleSelectChange={this.handleSelectChange}
                        />
                    </section>

                    <section>

                        <ul className="tutors-list">
                            {this.props.currentTutors.map(tutor =>
                                <TutorLink
                                    key={tutor.id}
                                    {...tutor}
                                />
                            )}
                        </ul>
                    </section>
                </div>


            </>
        )
    }
}