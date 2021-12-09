# Buổi 1: Học về `fs` và `Event loop`
## `fs`
Tạo các hàm CRUD với file `student.json`

## Event loop
Nhiệ vụ của event loop là để nhìn vào stack đang chạy và hàng chờ đợi task. Nếu stack đang trống thì nó sẽ lấy các tác vụ ở trong hàng đợi task và đẩy vào stack để nó có thể thực hiện. Chính vì vậy nên javascript là một ngôn ngữ single threaded nhưng vẫn có thể  xử lý được nhiều tác vụ xen kẽ tương tự như async, giúp tránh bị đầy stack khiến cho chương trình tốn nhiều thời gian hơn
