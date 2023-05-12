import { useState } from "react";
import "./AddProductForm.css"

const AddProductForm = () => {
  const [category, setCategory] = useState("Starter");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      category,
      itemName,
      price,
      image,
    });
    setCategory("Starter");
    setItemName("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
     <div>
     <div>
     <label htmlFor="category">Category:</label>
     <select id="category" value={category} onChange={handleCategoryChange}>
       <option value="Starter">Starter</option>
       <option value="Main Course">Main Course</option>
       <option value="Dessert">Dessert</option>
     </select>
   </div>
   <div>
     <label htmlFor="itemName">Item Name:</label>
     <input
       type="text"
       id="itemName"
       value={itemName}
       onChange={handleItemNameChange}
     />
   </div>
   <div>
     <label htmlFor="price">Price:</label>
     <input
       type="number"
       id="price"
       value={price}
       onChange={handlePriceChange}
     />
   </div>
   <div>
     <label htmlFor="image">Image:</label>
     <input type="file" id="image" onChange={handleImageChange} />
   </div>
   <button type="submit">Add Product</button>
     </div>
    </form>
  );
};

export default AddProductForm;
