import { Input, Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

type Unit = 'px' | 'vh';

interface PriceValue {
  number?: number;
  unit?: Unit;
}

interface PriceInputProps {
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [unit, setUnit] = useState<Unit>('px');

  const triggerChange = (changedValue: { number?: number; unit?: Unit }) => {
    onChange?.({ number, unit, ...value, ...changedValue });
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value || '0', 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };

  const onUnitChange = (newUnit: Unit) => {
    if (!('unit' in value)) {
      setUnit(newUnit);
    }
    triggerChange({ unit: newUnit });
  };

  return (
    <span>
      <Input
        type='text'
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 240 }}
      />
      <Select
        value={value.unit || unit}
        style={{ width: 60, margin: '0 8px' }}
        onChange={onUnitChange}
      >
        <Option value='px'>px</Option>
        <Option value='vh'>vh</Option>
      </Select>
    </span>
  );
};

export default PriceInput;
