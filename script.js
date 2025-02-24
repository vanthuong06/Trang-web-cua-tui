// === Chức năng: Kéo để cuộn sản phẩm ===
function enableDragging(sliderId) {
  const productList = document.querySelector(`#${sliderId} .product-list`);
  if (!productList) return;

  let isDragging = false;
  let startX, scrollLeft;

  // Khi nhấn chuột
  productList.addEventListener('mousedown', (e) => {
    isDragging = true;
    productList.classList.add('dragging');
    startX = e.pageX - productList.offsetLeft;
    scrollLeft = productList.scrollLeft;
  });

  // Khi di chuyển chuột
  productList.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - productList.offsetLeft;
    const walk = x - startX; // Tính khoảng cách kéo
    productList.scrollLeft = scrollLeft - walk;
  });

  // Khi thả chuột ra
  productList.addEventListener('mouseup', () => {
    isDragging = false;
    productList.classList.remove('dragging');
  });

  // Khi chuột rời khỏi phần sản phẩm
  productList.addEventListener('mouseleave', () => {
    isDragging = false;
    productList.classList.remove('dragging');
  });
}

// Kích hoạt kéo cho các slider
function initializeSliders() {
  ['slider-1', 'slider-2', 'slider-3'].forEach(enableDragging);
}

// === Chức năng: Tự động chạy banner (carousel) ===
function startCarousel() {
  const carouselImages = document.querySelector('.carousel-images');
  if (!carouselImages) return;

  const totalImages = document.querySelectorAll('.carousel-images img').length;
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages; // Tăng chỉ số ảnh và lặp lại từ đầu
    const offset = -currentIndex * 100; // Tính toán vị trí dịch chuyển
    carouselImages.style.transform = `translateX(${offset}%)`;
  }, 3000); // Chuyển ảnh sau mỗi 3 giây
}

// === Chức năng: Đăng nhập ===
function showLogin() {
  // Chuyển hướng đến trang đăng nhập
  window.location.href = "login.html";
}

function redirectToHome() {
  const username = document.getElementById("vanthuong06").value;
  const password = document.getElementById("1234").value;

  if (username === "vanthuong06" && password === "1234") {
    alert("Đăng nhập thành công! Chuyển về trang chủ...");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    alert("Tên tài khoản hoặc mật khẩu không đúng!");
  }
}

// === Chức năng: Đăng ký ===
function handleRegister(event) {
  event.preventDefault(); // Ngăn chặn tải lại trang

  const username = document.getElementById("new-username").value;
  const password = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const email = document.getElementById("email").value;

  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp. Vui lòng kiểm tra lại!");
    return;
  }

  if (!email.includes("@") && isNaN(email)) {
    alert("Vui lòng nhập email hợp lệ hoặc số điện thoại!");
    return;
  }

  alert("Đăng ký thành công! Bạn sẽ được chuyển về trang đăng nhập.");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
}

// === Khởi tạo khi trang tải xong ===
document.addEventListener('DOMContentLoaded', () => {
  // Bắt đầu carousel
  startCarousel();

  // Kích hoạt kéo để cuộn cho các slider
  initializeSliders();

  // Gán sự kiện cho nút đăng nhập
  const loginButton = document.querySelector('.login-button');
  if (loginButton) {
    loginButton.addEventListener('click', redirectToHome);
  }

  // Gán sự kiện cho form đăng ký (nếu có)
  const registerForm = document.querySelector('.register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }
});

function buyNow(productId) {
  // Danh sách sản phẩm mẫu với đường dẫn hình ảnh đúng
  const products = {
    1: { name: "Sản phẩm 1", price: "200,000 VND", image: "images/image1.jpg" },
    2: { name: "Sản phẩm 2", price: "300,000 VND", image: "https://f.hoatieu.vn/data/image/2020/11/27/hinh-anh-chuc-giang-sinh-dep-14.jpg.jpg" },
    3: { name: "Sản phẩm 3", price: "400,000 VND", image: "images/image3.jpg" },
  };

  // Lấy thông tin sản phẩm từ danh sách
  const product = products[productId];

  if (product) {
    // Lưu thông tin sản phẩm vào localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    // Chuyển hướng đến trang thanh toán
    window.location.href = "thanhtoan.html";
  }
}

