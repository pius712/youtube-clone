import * as React from 'react';
import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (
  initialValue: string
): [typeof value, typeof onChange, typeof setValue] => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
