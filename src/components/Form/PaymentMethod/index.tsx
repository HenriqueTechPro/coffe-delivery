import { Control, Controller, FieldErrors } from 'react-hook-form'

import {
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeader,
  PaymentOptions,
  PaymentType,
  PaymentTypeButton,
} from './styles'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

type FormFields = {
  cep: string
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface PaymentOptionsProps {
  control: Control<FormFields>
  errors: FieldErrors<FormFields>
}

export function PaymentMethod({ control, errors }: PaymentOptionsProps) {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} />

        <div>
          <span>Pagamento</span>

          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentHeader>

      <PaymentOptions>
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => {
            return (
              <PaymentType onValueChange={field.onChange} value={field.value}>
                <PaymentTypeButton variant="credit" value="credit">
                  <CreditCard size={16} />
                  cartão de crédito
                </PaymentTypeButton>
                <PaymentTypeButton variant="debit" value="debit">
                  <Bank size={16} />
                  cartão de débito
                </PaymentTypeButton>
                <PaymentTypeButton variant="cash" value="cash">
                  <Money size={16} />
                  dinheiro
                </PaymentTypeButton>
              </PaymentType>
            )
          }}
        />
        {errors.paymentMethod ? (
          <PaymentErrorMessage role="alert">
            {errors.paymentMethod.message}
          </PaymentErrorMessage>
        ) : null}
      </PaymentOptions>
    </PaymentContainer>
  )
}
