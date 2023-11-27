import { Input } from './Filter-styled';

export const Filter = ({ filter, onSearchContact }) => {
    return (
        <div>
        <p>Find contacts by name</p>
        <Input 
        type="text"
        name="filter"
        value={filter}
        onChange={e => onSearchContact(e.target.value)}
        />
        </div>
    )
};