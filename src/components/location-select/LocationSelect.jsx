import { MultiSelect } from '@mantine/core';
import { IoMdAdd } from "react-icons/io";
import classes from "./LocationSelect.module.css";

function LocationSelect({setLocation}) {
    return (
        <MultiSelect
            classNames={{
                input: classes.rootinput,
                section: classes.iconroot,
                pill: classes.pill,
                dropdown: classes.dropdown,
                option: classes.option
            }}
            checkIconPosition='right'
            rightSection={<IoMdAdd fontSize={24} />}
            placeholder=""
            data={['Borivali', 'Malad', 'Dahisar', 'Kurla', 'Bhanyandar Southern West', 'Bandra', 'mumbai']}
            onChange={(e) => { setLocation(e); }}
        />
    );
}

export default LocationSelect;