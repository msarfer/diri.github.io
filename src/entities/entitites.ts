export interface MenuItem {
  id: number,
  name: string,
  quantity: number,
  desc: string,
  price: number,
  image: string
}

export interface MenuContextType {
  menuItems: MenuItem[],
  isChooseFoodPage: boolean,
  setIsChooseFoodPage: (value: boolean) => void
}