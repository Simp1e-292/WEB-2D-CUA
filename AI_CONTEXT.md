# Bối Cảnh Dự Án (AI Context)
*File này dùng để đồng bộ trí nhớ cho AI (Antigravity) khi chuyển đổi môi trường làm việc.*

## 1. Tình trạng hiện tại (Đã hoàn thành)
- **Dữ liệu Lõi Huỳnh:** Đã tích hợp chuỗi Base64 vào `svgData.js`. Thuật toán `getBBox()` đang hoạt động tự động căn giữa lõi huỳnh chuẩn xác.
- **Giao diện Bản vẽ (3 hình chiếu):** Không còn nút 2D/3D. Bản vẽ hiện luôn hiển thị 3 góc nhìn: 
  - Mặt đứng (Front - Trung tâm)
  - Cắt ngang B-B (Top - Bên dưới)
  - Cắt dọc A-A (Side - Bên phải)
- **Độ chính xác Cấu kiện:** Vẽ biên dạng nhôm rỗng (1.5mm). Khung bao 50x130, Hèm 57x15, Cánh lọt lòng 2mm (dày 50mm), Khe hở chuẩn 3mm.
- **Kích thước (Dim):** Đã tự động sinh đường Dim đỏ và mũi tên nét đứt cho cả 3 hình chiếu.
- **Tối ưu hóa Code:** Đã tách riêng file `index.css` khỏi `index.html` để dễ quản lý. Toàn bộ code đã được push lên nhánh master.

## 2. Kế hoạch tiếp theo (TODO)
Khi đọc được file này, AI hãy chuẩn bị bắt tay vào thực hiện 3 tính năng sau (hoặc hỏi người dùng xem ưu tiên làm mục nào trước):
- [ ] **1. Thêm tùy chọn màu sắc nhôm:** Bổ sung giao diện chọn màu (Xingfa Ghi, Đen, Vân gỗ) và áp dụng màu này vào các cấu kiện khung/cánh SVG.
- [ ] **2. Vẽ phụ kiện:** Bổ sung việc vẽ hiển thị Khóa và Bản lề vào hình chiếu đứng.
- [ ] **3. Tính năng xuất bản vẽ:** Cài đặt nút/chức năng "Xuất bản vẽ ra file PDF/PNG" để lưu file gửi trực tiếp cho xưởng hoặc khách hàng.

---
**🤖 Ghi chú cho AI trong phiên làm việc mới:**
*Chào AI, tôi là người dùng. Nếu bạn đang đọc file này, tức là tôi vừa chuyển máy. Hãy phản hồi ngắn gọn xác nhận bạn đã hiểu toàn bộ tiến độ và hỏi tôi muốn bắt đầu làm TODO số mấy nhé!*
