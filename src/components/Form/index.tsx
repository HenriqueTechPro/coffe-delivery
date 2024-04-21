import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCart } from '../../hooks/useCart'
import { toast } from 'react-toastify'
import { getCep, GetCepResponse } from '../../api/get-cep'

import { PaymentContainer } from './PaymentMethod/styles'
import { PaymentMethod } from './PaymentMethod'
import { TextInput } from '../Inputs/TextInput'
import { AddressContainer, AddressForm, AddressHeading } from './styles'
import { InfoContainer } from '../../pages/Cart/styles'
import { MapPin } from '@phosphor-icons/react'

type FormInputsTypesProps = {
  cep: string
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z
    .string({ invalid_type_error: 'Informe o CEP' })
    .min(8, 'Informe um CEP válido.'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    required_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function ClientInfoForm() {
  const methods = useForm<FormInputsTypesProps>({
    resolver: zodResolver(newOrder),
  })

  const {
    handleSubmit,

    formState: { errors },
  } = methods

  async function handleLoadAddressAboutTheZipcode(cep: string) {
    try {
      const address: GetCepResponse | null = await getCep(cep)

      if (address === null) {
        console.error('Endereço não encontrado para o CEP:', cep)
        return
      }

      methods.setValue('street', address.logradouro || '')
      methods.setValue('number', address.complemento || '')
      methods.setValue('neighborhood', address.bairro || '')
      methods.setValue('city', address.localidade || '')
      methods.setValue('state', address.uf || '')
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error)
    }
  }

  const { checkout, cart } = useCart()

  const handleOrderCheckout: SubmitHandler<FormInputsTypesProps> = (data) => {
    if (cart.length === 0) {
      return toast('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }

  return (
    <>
      <FormProvider {...methods}>
        <InfoContainer>
          <h2>Complete seu pedido</h2>

          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <AddressContainer>
              <AddressHeading>
                <MapPin size={22} />

                <div>
                  <span>Endereço de Entrega</span>

                  <p>Informe o endereço onde deseja receber o seu pedido</p>
                </div>
              </AddressHeading>

              <AddressForm>
                <TextInput
                  placeholder="CEP"
                  type="text"
                  containerProps={{ style: { gridArea: 'cep' } }}
                  error={errors.cep}
                  {...methods.register('cep', {
                    required: 'Informe o CEP',
                    minLength: { value: 8, message: 'Informe um CEP válido' },
                  })}
                  onBlur={(e) =>
                    handleLoadAddressAboutTheZipcode(e.target.value)
                  }
                />

                <TextInput
                  placeholder="Rua"
                  containerProps={{ style: { gridArea: 'street' } }}
                  error={errors.street}
                  {...methods.register('street')}
                />

                <TextInput
                  placeholder="Número"
                  containerProps={{ style: { gridArea: 'number' } }}
                  error={errors.number}
                  {...methods.register('number')}
                />

                <TextInput
                  placeholder="Complemento"
                  optional
                  containerProps={{ style: { gridArea: 'fullAddress' } }}
                  error={errors.fullAddress}
                  {...methods.register('fullAddress')}
                />

                <TextInput
                  placeholder="Bairro"
                  containerProps={{ style: { gridArea: 'neighborhood' } }}
                  error={errors.neighborhood}
                  {...methods.register('neighborhood')}
                />

                <TextInput
                  placeholder="Cidade"
                  containerProps={{ style: { gridArea: 'city' } }}
                  error={errors.city}
                  {...methods.register('city')}
                />

                <TextInput
                  placeholder="UF"
                  maxLength={2}
                  containerProps={{ style: { gridArea: 'state' } }}
                  error={errors.state}
                  {...methods.register('state')}
                />
              </AddressForm>
            </AddressContainer>

            <PaymentContainer>
              <PaymentMethod control={methods.control} errors={errors} />
            </PaymentContainer>
          </form>
        </InfoContainer>
      </FormProvider>
    </>
  )
}
