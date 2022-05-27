import {SearchBar, ProductSearchList } from '../components'

export const Home = () => {
  return (
    <main>
        <SearchBar />
        {/* product list */}
        <ProductSearchList/>
    </main>
  )
}
