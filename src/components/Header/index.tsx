import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { LogoCoffeeDelivery } from '../../assets'
import {
  ContainerShoppingCart,
  HeaderContainer,
  InfoContainer,
  LocationContainer,
  LogoContainer,
  NavContainer,
} from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <img
            src={LogoCoffeeDelivery}
            alt="Copo de café ao lado do texto 'Coffee Delivery'"
          />
        </LogoContainer>

        <InfoContainer>
          <LocationContainer>
            <MapPin aria-hidden size={22} weight="fill" />
            Porto Alegre, RS
          </LocationContainer>

          <ContainerShoppingCart>
            {/* <span>3</span> */}

            <Link to="/checkout" aria-label="Abrir carrinho de compras">
              <button type="button">
                <ShoppingCart aria-hidden size={22} weight="fill" />
              </button>
            </Link>
          </ContainerShoppingCart>
        </InfoContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
