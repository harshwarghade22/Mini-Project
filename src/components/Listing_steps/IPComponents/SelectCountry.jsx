import { Select } from '@mantine/core';

export function SelectCountry() {
  return (
    <Select
      variant="unstyled"
      label="Country"
      placeholder="Country"
      data={['India','USA','Russia','China']}
    />
  );
}