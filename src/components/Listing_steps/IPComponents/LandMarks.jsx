import { TextInput } from '@mantine/core';
import { useState } from 'react';

export function LandMarks() {
  
  const [value, setValue] = useState('');
  return (
    <TextInput
      variant="unstyled"
      size="md"
      radius="md"
      placeholder="LandMarks"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}