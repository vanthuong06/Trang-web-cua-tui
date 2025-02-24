
document.addEventListener("DOMContentLoaded", () => {
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));
  
    if (productData) {
      // Hiển thị thông tin sản phẩm
      const productInfo = document.getElementById("product-info");
      productInfo.innerHTML = `
        <div class="checkout-item">
          <img src="${productData.image}" alt="${productData.name}" style="width:150px; height:auto; margin-bottom:10px;">
          <h3>${productData.name}</h3>
          <p>${productData.price}</p>
        </div>
      `;
  
      // Tính tổng giá theo số lượng
      const quantityInput = document.getElementById("quantity");
      const totalPriceElement = document.getElementById("total-price");
  
      const updateTotalPrice = () => {
        const quantity = parseInt(quantityInput.value) || 1;
        const price = parseInt(productData.price.replace(/,/g, "").replace(" VND", ""));
        const totalPrice = quantity * price;
        totalPriceElement.textContent = `Tổng: ${totalPrice.toLocaleString()} VND`;
      };
  
      quantityInput.addEventListener("input", updateTotalPrice);
      updateTotalPrice();
    } else {
      // Hiển thị thông báo nếu không có sản phẩm
      document.getElementById("product-info").innerHTML = "<p>Không có sản phẩm nào được chọn!</p>";
    }
  });
  
  function addToCart() {
    // Lấy thông tin sản phẩm từ localStorage
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));
  
    if (!productData) {
      alert("Không có sản phẩm nào được chọn!");
      return;
    }
  
    // Lấy số lượng từ input
    const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;
  
    // Chuẩn bị dữ liệu giỏ hàng
    const cartItem = {
      ...productData,
      quantity: quantity,
    };
  
    // Lấy giỏ hàng từ localStorage hoặc khởi tạo nếu chưa có
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Thêm sản phẩm vào giỏ hàng
    cart.push(cartItem);
  
    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  }
// Thêm vào giỏ hàng
// function addToCart() {
//   const productInfo = document.getElementById("product-info").textContent || "Sản phẩm mẫu";
//   const quantity = document.getElementById("quantity").value;
//   const totalPrice = calculateTotalPrice(quantity);

//   alert(`Đã thêm ${quantity} x ${productInfo} vào giỏ hàng. Tổng giá: ${totalPrice} VND`);
// }

// Tính tổng giá sản phẩm
function calculateTotalPrice(quantity) {
  const pricePerItem = 100000; // Giá mỗi sản phẩm (ví dụ)
  return pricePerItem * quantity;
}

// Xử lý thanh toán
function processPayment() {
  const address = document.getElementById("address").value;
  const specificAddress = document.getElementById("specific-address").value;
  const phone = document.getElementById("phone").value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

  // Kiểm tra thông tin
  if (!address || !specificAddress || !phone) {
    alert("Vui lòng điền đầy đủ thông tin giao hàng.");
    return;
  }

  // Giả lập thanh toán thành công
  setTimeout(() => {
    alert(`Thanh toán thành công!\nPhương thức: ${paymentMethod}\nĐịa chỉ: ${specificAddress}\nSố điện thoại: ${phone}`);
    console.log("Thông tin thanh toán đã xử lý.");
  }, 1000); // Mô phỏng độ trễ xử lý
}
function processPayment() {
  const address = document.getElementById("address").value;
  const specificAddress = document.getElementById("specific-address").value;
  const phone = document.getElementById("phone").value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

  // Kiểm tra thông tin
  if (!address || !specificAddress || !phone) {
    alert("Vui lòng điền đầy đủ thông tin giao hàng.");
    return;
  }

  // Giả lập thanh toán thành công
  setTimeout(() => {
    alert(`Thanh toán thành công!\nPhương thức: ${paymentMethod}\nĐịa chỉ: ${specificAddress}\nSố điện thoại: ${phone}`);
    
    // Điều hướng về trang chủ
    window.location.href = "index.html"; // Đường dẫn đến trang chủ
  }, 1000); // Mô phỏng độ trễ xử lý
}
