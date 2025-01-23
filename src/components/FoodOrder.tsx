import { useContext, useMemo, useState } from 'react'
import { MenuContext } from '../context/context'
import { MenuContextType, MenuItem } from '../entities/entitites'

interface FoodOrderProps {
  food: MenuItem
}

function FoodOrder({ food }: FoodOrderProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [isSend, setIsSend] = useState<boolean>(false)

  const { menuItems, setIsChooseFoodPage}: MenuContextType = useContext(MenuContext)

  const totalPrice = useMemo(() => quantity * food.price, [quantity])

  const handleSend = () => {
    setIsSend(true)
    menuItems.map((item) => {
      if (item.id === food.id) {
        item.quantity -= quantity
      }
    })
  }

  return (
    <article>
      <header>
        <h2>{food.name} - {food.desc}</h2>
        <h4>{totalPrice}</h4>
        <label htmlFor="quantity"> Cantidad</label>
        <input type="number" id='quantity' value={quantity} onChange={(evt) => setQuantity(Number(evt.target.value))} />
      </header>
      <input type="text" value={name} placeholder='Tu nombre' onChange={e => setName(e.target.value)} />
      <input type="text" value={phone} placeholder='Tu número de teléfono' onChange={e => setPhone(e.target.value)} />
      <section role='group'>
        <button onClick={handleSend}>Enviar producto</button>
        <button onClick={() => setIsChooseFoodPage(false)}>Volver al menú</button>
      </section>
      {isSend && <span style={{color: 'green'}}>Pedido enviado. Recibirá un SMS una vez esté listo para recoger</span>}
    </article>
  )
}

export default FoodOrder
