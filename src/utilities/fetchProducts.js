export default async function fetchproduct(){
    const res = await fetch('https://cart-api.teamrabbil.com/api/product-list');
    const data = await res.json();
    console.log(data);

}
