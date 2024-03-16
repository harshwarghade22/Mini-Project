import { Select } from '@mantine/core';
import { FaChevronDown } from "react-icons/fa";
import classes from "./PriceSelect.module.css"

function PriceSelect() {
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
            data={[{ value: "2000-3000", label: "2000 - 3000" }, { value: "3000-5000", label: "3000 - 5000" }, { value: "5000-7000", label: "5000 - 7000" }, { value: "7000-13000", label: "7000 - 13000" }]}
        />
    );
}

export default PriceSelect