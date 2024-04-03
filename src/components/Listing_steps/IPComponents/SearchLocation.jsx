import { TextInput } from '@mantine/core';
import { useState } from 'react';

export function SearchLocation() {
    const [value, setValue] = useState('');

  return (
    <TextInput
      variant="unstyled"
      size="md"
      radius="md"
      placeholder="Search Location"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}