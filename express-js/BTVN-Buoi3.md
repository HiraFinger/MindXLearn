# Bài tập về nhà buổi 3
## CRUD student
-   http://localhost:3000/student/all : Hiển thị danh sách sinh viên
-   http://localhost:3000/student/add : Thêm SV
-   http://localhost:3000/student/delete : Xóa SV theo id
-   http://localhost:3000/student/update : Chỉnh sửa thông tin SV theo id
-   http://localhost:3000/student/find : Tìm kiếm SV và hiển thị thông tin SV theo id

## RESTful là gì?
- **API**: là phương thức, giao kết nối các thư viện và ứng dụng. Nó cung cấp các khả năng cung cấp và truy xuất dữ liệu đến một tập các hàm hay dùng. Trong website thì API cho phép ta kết nối và cập nhật dữ liệu từ backend và frontend.
- **RESTful**: là một tiêu chuẩn dùng trong thiết kế các API cho web để quản lý các tài nguyên. Nó quy định cách sử dụng các HTTP method và định dạng các URL cho web.
    -  Có 4 phương thức chính thường được hay sử dụng trong RESTful:
        - GET: dùng để truy xuất dữ liệu và không thể sửa đổi nó
        - POST: dùng để tạo tài nguyên mới
        - PUT: dùng để cập nhật dữ liệu. Nếu tập dữ liệu đó chưa tồn tại thì có thể quyết định tạo mới tài nguyên đó hay không.
        - DELETE: dùng để xóa tài nguyên
    - Ngoài ra còn có các phương thức như:
        - PATCH: dùng để cập nhật 1 phần tài nguyên và không thể thay thế tất cả tài nguyên như *PUT*
        - HEAD: Trả về thông tin chung của tài nguyên (độ dài,loại,...) và cũng không thể chỉnh sửa thông tin đó.
        - OPTIONS: dùng để Trả về thông tin mà người dùng được phép với tài nguyên.