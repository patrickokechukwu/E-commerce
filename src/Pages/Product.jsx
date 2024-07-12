// import { useContext } from "react"
// import Breadcrums from "../Components/Breadcrums/Breadcrums";
// import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../Context/ShopContext";


// const Products = () => {
//   const {all_product}= useContext(ShopContext);
//   const {product_id}= useParams();
//   const product = all_product.find((e)=> e.id === Number(product_id));
//   return (
//     <div>
//       <Breadcrums product={product}/>
//       <ProductDisplay product={product}/>
//     </div>
//   )
// }

// export default Products
import { useContext } from "react"
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // Corrected variable name to match route parameter
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} /> {/* Assuming Breadcrumbs receives product prop */}
      {product && <ProductDisplay product={product} />} {/* Render ProductDisplay only if product exists */}
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
}

export default Products;
