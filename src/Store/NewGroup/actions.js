import { BASE_URL } from '../../Utils/index.js';
import { setList } from '../actions';

const actions = Object.freeze({
    SET_NEW_LIST: 'newList/set',
    VISIBLE: 'newList/visible',
    HIDDEN: 'newList/hidden',
    TOGGLE: 'newList/toggle',
});

const setNewList = (payload) => ({ type: actions.SET_NEW_LIST, payload });

const visible = () => ({ type: actions.VISIBLE });

const hidden = () => ({ type: actions.HIDDEN });

const toggle = () => ({ type: actions.TOGGLE });

const clearUrl = (value) => {
    return value.toLowerCase().replace(' ', '-');
};

const group1 = { children: 'Home', to: 'home' };

const service = ({ url, method = 'POST', data }) => {
    return fetch(`${BASE_URL}${url}.json`, {
        method: method,
        body: JSON.stringify(data)
    }).then((res) => res.json())
};

function defaultGroup() {
    service({ url: '/groups', method: 'POST', data: group1 })
};


const saveNewCategory = () => (dispatch, getState) => {
    const clearValue = getState().newList.value.trim();
    const newCategory = {
        children: clearValue,
        to: clearUrl(clearValue),
    }

    fetch(`${BASE_URL}/groups.json`, {
        method: 'POST',
        body: JSON.stringify(newCategory),
    })
        .then(res => res.json())
        .then((data) => {
            newCategory.id = data.name;
            dispatch(setList(newCategory));
        });
}


export { actions, setNewList, visible, hidden, toggle, saveNewCategory, defaultGroup, service }