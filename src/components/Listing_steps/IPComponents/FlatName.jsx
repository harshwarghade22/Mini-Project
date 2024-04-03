import { TextInput } from '@mantine/core';
import { useState } from 'react';

export function FlatName() {
    const [value, setValue] = useState('');
  return (
    <TextInput
      variant="unstyled"
      size="md"
      radius="md"
      placeholder="Flat No./Apartment Name etc...."
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}