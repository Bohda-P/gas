import React, { useRef } from 'react';
// Styled
import { Container, InputComponent } from './confirm-code.styled';

interface ConfirmCodeProps {
  onChangeCode: React.Dispatch<React.SetStateAction<string>>;
}

const ConfirmCode: React.FC<ConfirmCodeProps> = ({ onChangeCode }) => {
  const code1Ref = useRef(null);
  const code2Ref = useRef(null);
  const code3Ref = useRef(null);
  const code4Ref = useRef(null);
  const code5Ref = useRef(null);
  const code6Ref = useRef(null);

  const handleCodeChange = (value: string, ref: any) => {
    if (value.length === 1 && ref?.current) {
      ref?.current.focus();
    }
    onChangeCode((prev: string) => prev + value);
  };

  return (
    <Container>
      <InputComponent
        keyboardType="numeric"
        ref={code1Ref}
        maxLength={1}
        onChangeText={(value) => handleCodeChange(value, code2Ref)}
      />
      <InputComponent
        keyboardType="numeric"
        ref={code2Ref}
        maxLength={1}
        onChangeText={(value) => handleCodeChange(value, code3Ref)}
      />
      <InputComponent
        keyboardType="numeric"
        ref={code3Ref}
        maxLength={1}
        onChangeText={(value) => handleCodeChange(value, code4Ref)}
      />
      <InputComponent
        keyboardType="numeric"
        ref={code4Ref}
        maxLength={1}
        onChangeText={(value) => handleCodeChange(value, code5Ref)}
      />
      <InputComponent
        keyboardType="numeric"
        ref={code5Ref}
        maxLength={1}
        onChangeText={(value) => handleCodeChange(value, code6Ref)}
      />
      <InputComponent
        keyboardType="numeric"
        ref={code6Ref}
        maxLength={1}
        onChangeText={(value) => handleCodeChange(value, null)}
      />
    </Container>
  );
};

export default ConfirmCode;
