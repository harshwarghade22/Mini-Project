import { Button } from '@mantine/core';
import FilterArrow from '../Icons/FilterArrow';
import classes from "./FilterBtn.module.css";

function FilterBtn() {
  return <Button 
    variant="outline" 
    classNames={{
        root: classes.root,
        label: classes.label,
        section: classes.section
    }}
    leftSection={<FilterArrow />}
  >
    Filter
  </Button>;
}

export default FilterBtn