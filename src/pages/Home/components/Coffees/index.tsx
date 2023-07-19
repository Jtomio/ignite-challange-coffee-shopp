import CoffeeAmerican from '../../../../assets/coffee/type-americano.png'
import CoffeeWithMilk from '../../../../assets/coffee/type-caf-com-leite.png'
import CoffeeGelato from '../../../../assets/coffee/type-caf-gelado.png'
import CoffeeCapuccino from '../../../../assets/coffee/type-capuccino.png'
import HotChocolate from '../../../../assets/coffee/type-chocolate-quente.png'
// import CoffeeCuban from '../../../../assets/coffee/type-cubano.png'
// import CoffeeExpressoCream from '../../../../assets/coffee/type-expresso-cremoso.png'
import CoffeeExpresso from '../../../../assets/coffee/type-expresso.png'
// import CoffeeHavaiano from '../../../../assets/coffee/type-havaiano.png'
// import CoffeeIrlands from '../../../../assets/coffee/type-irlands.png'
// import CoffeeLatte from '../../../../assets/coffee/type-latte.png'
// import CoffeeMacchiato from '../../../../assets/coffee/type-macchiato.png'
// import CoffeeMochaccino from '../../../../assets/coffee/type-mochaccino.png'
// import CoffeeArabe from '../../../../assets/coffee/typerabe.png'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer, CoffeesGrid } from './styles'

interface Coffee {
  id: string
  tags: string[]
  name: string
  description: string
  price: string
  img: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CoffeesList {
  coffees: Coffee[]
}

const coffeesList = [
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description:
      'É uma bebida que se caracteriza por ter um sabor mais suave e menos intenso em comparação com outros métodos de preparo de café, como o expresso.',
    price: '9,90',
    img: CoffeeAmerican,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description:
      'O tradicional café feito com água quente e grãos moídos e adição de leite quente.',
    price: '9,90',
    img: CoffeeWithMilk,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description:
      'O café gelado é uma bebida refrescante feita com café frio ou resfriado, geralmente servido com gelo.',
    price: '9,90',
    img: CoffeeGelato,
  },
  {
    id: new Date().getTime(),
    tags: ['Expresso'],
    name: 'Expresso Tradicional',
    description:
      'O cappuccino é uma bebida popular feita com café espresso, leite vaporizado e espuma de leite.',
    price: '9,90',
    img: CoffeeCapuccino,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    img: CoffeeExpresso,
  },
  {
    id: new Date().getTime(),
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description:
      'O chocolate quente é uma bebida quente e reconfortante feita a partir de chocolate derretido misturado com leite ou água quente.',
    price: '9,90',
    img: HotChocolate,
  },
]

export function Coffees() {
  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>

      <CoffeesGrid>
        {coffeesList.map((coffee) => (
          <CoffeeCard key={coffee.id} />
        ))}
      </CoffeesGrid>
    </CoffeesContainer>
  )
}
