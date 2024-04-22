import { useRef, useState } from 'react';
import { Combobox, Group, Input, InputBase, useCombobox } from '@mantine/core';
import classes from './SearchBar.module.css';

const places = [
    'Mumbai',
    'Pune',
    'Navi Mumbai',
    'Mumbai Suburban',
];

const flatType = [
    '1 BK',
    '1 BHK',
    '2 BHK',
    'Independent House'
]

const flatMateType = [
    'Male',
    'Female',
    'Other'
]

export default function SearchBar() {
    const whereRef = useRef(null);
    const whatRef = useRef(null);
    const whoRef = useRef(null);

    const whereCombobox = useCombobox({
        onDropdownClose: () => whereCombobox.resetSelectedOption(),
    });

    const whatCombobox = useCombobox({
        onDropdownClose: () => whatCombobox.resetSelectedOption(),
    });
    
    const whoCombobox = useCombobox({
        onDropdownClose: () => whoCombobox.resetSelectedOption(),
    });

    const [what, setWhat] = useState("1 RK");

    const [who, setWho] = useState('Male');

    const whatOptions = flatType.map((item) => (
        <Combobox.Option value={item} key={item}>
            <div className='flex justify-start items-center whitespace-nowrap'>
                <img
                    className="w-5 h-5 mr-2"
                    src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png"
                    alt=""
                />
                {item}
            </div>
        </Combobox.Option>
    ));
    
    const whoOptions = flatMateType.map((item) => (
        <Combobox.Option value={item} key={item}>
            <div className='flex justify-start items-center whitespace-nowrap'>
                <img
                    className="w-5 h-5 mr-2"
                    src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png"
                    alt=""
                />
                {item}
            </div>
        </Combobox.Option>
    ));
    

    const [value, setValue] = useState(null);
    const [search, setSearch] = useState('');

    const shouldFilterOptions = places.every((item) => item !== search);
    const filteredOptions = shouldFilterOptions
        ? places.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
        : places;

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
            <div className='flex flex-col justify-center items-center text-center text-ellipsis'>
                <img
                    className="w-10 h-10"
                    src="https://cdn-icons-png.flaticon.com/128/1283/1283983.png"
                    alt=""
                />
                
                {item}
            </div>
        </Combobox.Option>
    ));

    return (
        <Group gap="sm" classNames={{ root: classes.grouproot }}>
            <div className={classes.inputroot}>
                <Combobox
                    classNames={{ options: classes.whereoptions, option: classes.whereoption, dropdown: classes.wheredropdown }}
                    store={whereCombobox}
                    withinPortal={false}
                    onOptionSubmit={(val) => {
                        setValue(val);
                        setSearch(val);
                        whereCombobox.closeDropdown();
                        whatCombobox.openDropdown();
                        whereRef.current?.blur();
                        whatRef.current?.focus();
                    }}
                >
                    <Combobox.Target>
                        <Input.Wrapper label="Where">
                            <Input
                                ref={whereRef}
                                classNames={{
                                    input: classes.searchinput,
                                }}
                                w={{ base: 200, xs: 200 }}
                                value={(value || search)}
                                onChange={(event) => {
                                    setValue(null)
                                    whereCombobox.openDropdown();
                                    whereCombobox.updateSelectedOptionIndex();
                                    setSearch(event.currentTarget.value);
                                }}
                                onClick={() => whereCombobox.openDropdown()}
                                onFocus={() => whereCombobox.openDropdown()}
                                onBlur={() => {
                                    whereCombobox.closeDropdown();
                                    setSearch(value || '');
                                }}
                                placeholder="Search value"
                            />
                        </Input.Wrapper>
                    </Combobox.Target>

                    <Combobox.Dropdown>
                        <Combobox.Options>
                            {options.length > 0 ? options : <Combobox.Empty classNames={{ empty: classes.optionempty }}>Nothing found</Combobox.Empty>}
                        </Combobox.Options>
                    </Combobox.Dropdown>
                </Combobox>
            </div>
            <div className={classes.inputroot}>
                <Combobox
                    classNames={{ options: classes.whatoptions, option: classes.whatoption, dropdown: classes.whatdropdown }}
                    store={whatCombobox}
                    withinPortal={false}
                    onOptionSubmit={(val) => {
                        setWhat(val);
                        whatCombobox.closeDropdown();
                        whoCombobox.openDropdown();
                        whatRef.current?.blur();
                        whoRef.current?.focus();
                    }}
                    >
                    <Combobox.Target>
                        <Input.Wrapper label="What">
                            <InputBase
                                ref={whatRef}
                                w={{ base: 200, xs: 120 }}
                                classNames={{
                                    input: classes.searchinput,
                                }}
                                component="button"
                                type="button"
                                onClick={() => whatCombobox.toggleDropdown()}
                                >
                                {what || <Input.Placeholder>Pick value</Input.Placeholder>}
                            </InputBase>
                        </Input.Wrapper>
                    </Combobox.Target>

                    <Combobox.Dropdown>
                        <Combobox.Options>{whatOptions}</Combobox.Options>
                    </Combobox.Dropdown>
                </Combobox>
            </div>
            <div className={classes.inputroot}>
                <Combobox
                    classNames={{ options: classes.whatoptions, option: classes.whatoption, dropdown: classes.whatdropdown }}
                    store={whoCombobox}
                    withinPortal={false}
                    onOptionSubmit={(val) => {
                        setWho(val);
                        whoCombobox.toggleDropdown();
                        whoRef.current?.blur();
                    }}
                    >
                    <Combobox.Target>
                        <Input.Wrapper label="Who">
                            <InputBase
                                ref={whoRef}
                                w={{ base: 200, xs: 100 }}
                                classNames={{
                                    input: classes.searchinput,
                                }}
                                component="button"
                                type="button"
                                onClick={() => whoCombobox.toggleDropdown()}
                                >
                                {who || <Input.Placeholder>Pick value</Input.Placeholder>}
                            </InputBase>
                        </Input.Wrapper>
                    </Combobox.Target>

                    <Combobox.Dropdown>
                        <Combobox.Options>{whoOptions}</Combobox.Options>
                    </Combobox.Dropdown>
                </Combobox>
            </div>
        </Group>
    );
}