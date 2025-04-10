document
  .getElementById("delete-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("product_id").value;

    fetch(`http://localhost:2024/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product deleted successfully!");
        console.log(data);
      })
      .catch((err) => {
        alert("Error deleting product.");
        console.error(err);
      });
  });
