import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getProducts } from "../../../../redux/features/products/actions"
import { getCategory } from "../../../../redux/features/categories/actions"

const OptionsCategories = ({ listCategories, functionRestart }) => {

  const dispatch = useDispatch()
  const [category, setCategory] = useState(listCategories[0].id)


  const handleOnClick = (id) => {
    setCategory( id )
    dispatch(getProducts(id))
    functionRestart(false)
  }

  useEffect(() => {
    dispatch(getCategory(listCategories[0].id))
    dispatch(getProducts(listCategories[0].id))
  }, [])

  useEffect(() => {
    dispatch(getCategory(category))
  }, [category])

  useEffect(() => {
    return () => {
    dispatch(getCategory(listCategories[0].id))
    dispatch(getProducts(listCategories[0].id))
    }
  }, [])



  return (
    <div>
        <select
            onChange={(e) => handleOnClick(e.target.value)}
            value={category}
        >
            {listCategories.map(category => (
                <option
                  key={category.id} 
                  value={category.id}
                >
                  {category.name}
                </option>
            ))}
        </select>
    </div>
  )
}

export default OptionsCategories