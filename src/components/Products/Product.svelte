<script>
  export let product;
  import { link } from "svelte-routing";
  const { title, id, image, price } = product;
</script>

<article class="product">
  <div class="img-container">
    <img src={image} alt={title} />
    <a href={`/product/${id}`} class="btn btn-primary product-link">details</a>
  </div>
  <div class="product-footer">
    <p class="product-title">{title}</p>
    <p class="product-price">${price}</p>
  </div>
</article>
