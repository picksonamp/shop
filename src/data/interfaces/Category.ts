import IProduct from "./Product"


export default interface Value {
  products: IProduct[],
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  setCurrentProduct: React.Dispatch<React.SetStateAction<IProduct>>
}