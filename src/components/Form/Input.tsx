import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError, FieldErrors } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
  ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          
        <ChakraInput 
          name={name}
          id={name} 
          focusBorderColor='pink.500'
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size="lg"
          {...rest}
          ref={ref}
        />

        

        {
          !!error && (
            <ErrorMessage
              errors={error}
              name={name}
              render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
            />
          )
        }
      </FormControl>
    );
}

export const Input = forwardRef(InputBase);