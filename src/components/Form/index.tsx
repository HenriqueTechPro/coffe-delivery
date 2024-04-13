import { z } from 'zod'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { MapPinLine } from 'phosphor-react'
import {
  CheckoutAddressForm,
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormHeader,
} from './styled'
import { CustomInputForm } from './components/Input/CustomInput'
import { Payment } from '../Payment'
import { useContext } from 'react'
import { CheckoutContext } from '../../context/CheckoutContext'

type FormInputs = {
  cep: string
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrderSchema = z.object({
  cep: z.string({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrderSchema>

export function PaymentForm() {
  const { cart, checkout } = useContext(CheckoutContext)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderInfo>({
    resolver: zodResolver(newOrderSchema),
  })

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }

  return (
    <CheckoutContainer>
      <span>Complete seu pedido</span>

      <CheckoutForm id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
        <CheckoutFormHeader>
          <MapPinLine size={22} />

          <div>
            <span>Endereço de Entrega</span>

            <p>Informe o endereço onde deseja receber o seu pedido</p>
          </div>
        </CheckoutFormHeader>

        <CheckoutAddressForm>
          <CustomInputForm
            placeholder="CEP"
            type="text"
            containerProps={{ style: { gridArea: 'cep' } }}
            error={errors.cep}
            {...register('cep')}
          />

          <CustomInputForm
            placeholder="Endereço"
            containerProps={{ style: { gridArea: 'street' } }}
            error={errors.street}
            {...register('street')}
          />

          <CustomInputForm
            placeholder="Número"
            containerProps={{ style: { gridArea: 'number' } }}
            error={errors.number}
            {...register('number')}
          />

          <CustomInputForm
            placeholder="Complemento"
            containerProps={{ style: { gridArea: 'fullAddress' } }}
            error={errors.fullAddress}
            optional={true}
            {...register('fullAddress')}
          />

          <CustomInputForm
            placeholder="Bairro"
            containerProps={{ style: { gridArea: 'neighborhood' } }}
            error={errors.neighborhood}
            {...register('neighborhood')}
          />

          <CustomInputForm
            placeholder="Cidade"
            containerProps={{ style: { gridArea: 'city' } }}
            error={errors.city}
            {...register('city')}
          />

          <CustomInputForm
            placeholder="UF"
            maxLength={2}
            containerProps={{ style: { gridArea: 'state' } }}
            error={errors.state}
            {...register('state')}
          />
        </CheckoutAddressForm>
      </CheckoutForm>

      <Payment control={control} errors={errors} />
    </CheckoutContainer>
  )
}
