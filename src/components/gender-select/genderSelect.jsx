import { Select } from '@mantine/core';
import { FaChevronDown } from "react-icons/fa";
import classes from "./genderSelect.module.css"

function GenderSelect() {
    return (
        <Select
            rightSection={<FaChevronDown fontSize={16} />}
            checkIconPosition='right'
            classNames={{
                input: classes.input,
                section: classes.section,
                dropdown: classes.dropdown,
                option: classes.option
            }}
            data={[{ value: "Male", label: "Male" }, { value: "Memale", label: "Memale" }, { value: "Other", label: "Other" }]}
        />
    );
}

export default GenderSelect