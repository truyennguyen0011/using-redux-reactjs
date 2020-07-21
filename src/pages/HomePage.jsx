import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {

};

const randomNum = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage (props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        const newId = randomNum();
        const newHobby = {
            id: newId,
            title: `Hobby: ${newId}`
        }

        const action = addNewHobby(newHobby);
        dispatch(action);
    };

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };

    return (
        <div className="home-page">
            <h1>List item</h1>

            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList 
                hobbyList={hobbyList} 
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    )
}

export default HomePage;