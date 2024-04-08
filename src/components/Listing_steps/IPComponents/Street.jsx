import { TextInput } from '@mantine/core';
import { useState } from 'react';

export function Street() {

    const [value, setValue] = useState('');
  return (
    <TextInput
      variant="unstyled"
      size="md"
      radius="md"
      placeholder="Street/Locality"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}