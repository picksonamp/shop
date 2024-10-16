import Product from "./Product"


export default interface Value {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}